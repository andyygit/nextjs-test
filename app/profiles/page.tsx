import { Userlist } from '@/components/users-list';
import { Suspense } from 'react';
import Skeleton from '@/components/skeleton';

export default async function Page() {
  return (
    <div>
      <h1 className="text-lg">My data fetcher</h1>
      <Suspense fallback={<Skeleton />}>
        <Userlist />
      </Suspense>
    </div>
  );
}
