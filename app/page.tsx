import { Userlist } from '@/data-access/data';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div>
      <h1 className="text-lg">My data fetcher</h1>
      <Suspense fallback={<div>loading...</div>}>
        <Userlist />
      </Suspense>
    </div>
  );
}
