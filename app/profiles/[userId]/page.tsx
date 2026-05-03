import { Suspense } from 'react';
import Skeleton from '@/components/ui/skeleton';
import Profile from '@/components/profile';

async function SuspendedComponent({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  return <Profile searchID={userId} />;
}

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  return (
    <Suspense fallback={<Skeleton />}>
      <SuspendedComponent params={params} />
    </Suspense>
  );
}
