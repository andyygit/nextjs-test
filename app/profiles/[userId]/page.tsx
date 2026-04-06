import { Suspense } from 'react';
import Skeleton from '@/components/skeleton';
import Profile from '@/components/profile';

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  return (
    <Suspense fallback={<Skeleton />}>
      <Profile id={userId} />
    </Suspense>
  );
}
