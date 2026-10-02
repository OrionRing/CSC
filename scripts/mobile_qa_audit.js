const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';

const viewports = [
  { name: 'Compact Mobile', width: 360, height: 640, deviceScaleFactor: 2.0 },
  { name: 'Standard Modern Mobile', width: 390, height: 844, deviceScaleFactor: 3.0 },
  { name: 'Large Mobile / Flagship', width: 412, height: 915, deviceScaleFactor: 2.625 },
  { name: 'Edge Constraint', width: 320, height: 568, deviceScaleFactor: 2.0 },
];

const routes = [
  { path: '/', label: 'Home Page' },
  { path: '/projects', label: 'Projects Hub' },
  { path: '/projects/cqd-acrylic-uv-shield', label: 'Project Detail (CQD)' },
  { path: '/about', label: 'About Page' },
  { path: '/roadmap', label: 'Roadmap Page' },
  { path: '/journal', label: 'Journal Hub' },
  { path: '/journal/cqd-spectrophotometer-log', label: 'Journal Entry Detail' },
];

const outputDir = path.join(__dirname, '..', '..', 'brain', '2076a0c6-0a56-448d-9da2-7754b981c460', 'qa_report');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function runAudit() {
  console.log('🚀 Starting Automated Mobile QA & Usability Audit...');
  const browser = await chromium.launch({ headless: true });

  const auditResults = [];

  for (const vp of viewports) {
    console.log(`\n📱 Viewport Target: ${vp.name} (${vp.width}x${vp.height} dpr:${vp.deviceScaleFactor})`);

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.deviceScaleFactor,
      isMobile: true,
      hasTouch: true,
    });

    for (const route of routes) {
      const page = await context.newPage();
      const consoleErrors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      const fullUrl = `${BASE_URL}${route.path}`;
      let pagePass = true;
      let issues = [];

      try {
        await page.goto(fullUrl, { waitUntil: 'load', timeout: 10000 });
        await page.waitForTimeout(200);

        // 1. Horizontal Viewport Overflow Check
        const overflow = await page.evaluate((vpWidth) => {
          const docWidth = document.documentElement.scrollWidth;
          const hasOverflow = docWidth > vpWidth + 1;
          const offending = [];

          if (hasOverflow) {
            document.querySelectorAll('*').forEach((el) => {
              const rect = el.getBoundingClientRect();
              if (rect.right > vpWidth + 1.5 || rect.left < -1.5) {
                offending.push({
                  tag: el.tagName.toLowerCase(),
                  id: el.id ? `#${el.id}` : '',
                  className: el.className ? `.${String(el.className).trim().split(/\s+/).join('.')}` : '',
                  right: Math.round(rect.right),
                  left: Math.round(rect.left),
                  width: Math.round(rect.width),
                  text: (el.textContent || '').trim().slice(0, 35),
                });
              }
            });
          }

          return { docWidth, vpWidth, hasOverflow, offending: offending.slice(0, 5) };
        }, vp.width);

        if (overflow.hasOverflow) {
          pagePass = false;
          issues.push({
            type: 'HORIZONTAL_OVERFLOW',
            severity: 'CRITICAL',
            details: `Document scrollWidth (${overflow.docWidth}px) exceeds viewport width (${overflow.vpWidth}px).`,
            offending: overflow.offending,
          });
        }

        // 2. Touch & Tap Target Ergonomics (<44x44px)
        const touchTargets = await page.evaluate((vpWidth) => {
          const smallTargets = [];
          const edgeTargets = [];

          const elements = Array.from(document.querySelectorAll('button, a[href], input, select, textarea, [role="button"]'));
          elements.forEach((el) => {
            if (el.offsetParent === null) return;
            const rect = el.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            const isSmall = rect.width < 44 || rect.height < 44;
            const isNearEdge = rect.left < 8 || vpWidth - rect.right < 8;

            if (isSmall) {
              smallTargets.push({
                tag: el.tagName.toLowerCase(),
                text: (el.textContent || el.getAttribute('aria-label') || el.value || '').trim().slice(0, 30),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                class: el.className ? `.${String(el.className).trim().split(/\s+/).join('.')}` : '',
              });
            }

            if (isNearEdge && rect.width > 20) {
              edgeTargets.push({
                tag: el.tagName.toLowerCase(),
                text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30),
                left: Math.round(rect.left),
                right: Math.round(rect.right),
              });
            }
          });

          return { smallTargets: smallTargets.slice(0, 5), edgeTargets: edgeTargets.slice(0, 5) };
        }, vp.width);

        if (touchTargets.smallTargets.length > 0) {
          issues.push({
            type: 'SMALL_TOUCH_TARGET',
            severity: 'WARNING',
            details: `${touchTargets.smallTargets.length} interactive targets are smaller than recommended 44x44px.`,
            targets: touchTargets.smallTargets,
          });
        }

        // 3. Typography & Form Behavior
        const typography = await page.evaluate(() => {
          const smallFonts = [];
          const inputZoomRisk = [];

          document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, button, label, li').forEach((el) => {
            if (el.offsetParent === null) return;
            const style = window.getComputedStyle(el);
            const fontSize = parseFloat(style.fontSize);

            if (fontSize < 12 && el.textContent.trim().length > 2) {
              smallFonts.push({
                tag: el.tagName.toLowerCase(),
                text: el.textContent.trim().slice(0, 30),
                fontSize: `${fontSize}px`,
                class: el.className ? `.${String(el.className).trim().split(/\s+/).join('.')}` : '',
              });
            }

            if (['input', 'select', 'textarea'].includes(el.tagName.toLowerCase())) {
              if (fontSize < 16) {
                inputZoomRisk.push({
                  tag: el.tagName.toLowerCase(),
                  name: el.name || el.id || '',
                  fontSize: `${fontSize}px`,
                });
              }
            }
          });

          return { smallFonts: smallFonts.slice(0, 5), inputZoomRisk: inputZoomRisk.slice(0, 5) };
        });

        if (typography.smallFonts.length > 0) {
          issues.push({
            type: 'TINY_TYPOGRAPHY',
            severity: 'INFO',
            details: `${typography.smallFonts.length} elements have font-size < 12px.`,
            samples: typography.smallFonts,
          });
        }

        if (typography.inputZoomRisk.length > 0) {
          pagePass = false;
          issues.push({
            type: 'IOS_INPUT_ZOOM_RISK',
            severity: 'HIGH',
            details: `${typography.inputZoomRisk.length} form inputs have font-size < 16px (will trigger auto-zoom on iOS Safari).`,
            inputs: typography.inputZoomRisk,
          });
        }

        // 4. Media Containment
        const mediaContainment = await page.evaluate(() => {
          const unconstrainedMedia = [];
          document.querySelectorAll('img, video, iframe, canvas, svg').forEach((el) => {
            if (el.offsetParent === null) return;
            const rect = el.getBoundingClientRect();
            const parentRect = el.parentElement ? el.parentElement.getBoundingClientRect() : rect;

            if (rect.width > parentRect.width + 2) {
              unconstrainedMedia.push({
                tag: el.tagName.toLowerCase(),
                src: el.src || el.currentSrc || '',
                width: Math.round(rect.width),
                parentWidth: Math.round(parentRect.width),
              });
            }
          });
          return unconstrainedMedia;
        });

        if (mediaContainment.length > 0) {
          pagePass = false;
          issues.push({
            type: 'UNCONSTRAINED_MEDIA',
            severity: 'HIGH',
            details: `${mediaContainment.length} media elements overflow their parent container width.`,
            media: mediaContainment,
          });
        }

        // Screenshot
        const safeName = `${vp.name.replace(/[^a-zA-Z0-0]/g, '_')}_${route.path.replace(/[^a-zA-Z0-0]/g, '_')}`;
        const screenshotPath = path.join(outputDir, `${safeName}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });

        auditResults.push({
          viewport: vp.name,
          resolution: `${vp.width}x${vp.height} (dpr ${vp.deviceScaleFactor})`,
          route: route.path,
          label: route.label,
          status: pagePass ? 'PASS' : 'FAIL',
          issuesCount: issues.length,
          issues,
          consoleErrors,
          screenshotPath,
        });

        console.log(`  └─ [${pagePass ? '✅ PASS' : '❌ FAIL'}] ${route.label} (${route.path}) — ${issues.length} issue(s)`);

      } catch (err) {
        console.error(`  └─ 🚨 Error crawling ${route.path}:`, err.message);
        auditResults.push({
          viewport: vp.name,
          resolution: `${vp.width}x${vp.height}`,
          route: route.path,
          label: route.label,
          status: 'FAIL',
          issuesCount: 1,
          issues: [{ type: 'SCRIPT_ERROR', severity: 'CRITICAL', details: err.message }],
          consoleErrors,
        });
      } finally {
        await page.close();
      }
    }

    await context.close();
  }

  await browser.close();

  // Save audit JSON
  const jsonPath = path.join(outputDir, 'mobile_qa_results.json');
  fs.writeFileSync(jsonPath, JSON.stringify(auditResults, null, 2));
  console.log(`\n🎉 Mobile QA Audit Completed! Results saved to ${jsonPath}`);
}

runAudit();
