'use client';

import { Suspense } from 'react';
import Callback from './Callback';

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-4">Loading...</div>}>
      <Callback />
    </Suspense>
  );
}
