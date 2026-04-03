import { Suspense } from 'react';
import ProfilesList from '@/components/profiles-list';
import Skeleton from '@/components/skeleton';

export default async function Page() {
  return (
    <>
      <div className="text-lg">My profiles fetcher</div>
      <Suspense fallback={<Skeleton />}>
        <ProfilesList />
      </Suspense>
    </>
  );
}
