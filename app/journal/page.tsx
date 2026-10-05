'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function JournalPage() {
  useEffect(() => {
    redirect('/projects');
  }, []);

  return null;
}
