import { getCurrentUserSession } from '@/actions/session';
import Skeleton from '@/components/ui/skeleton';
import { Suspense } from 'react';

async function SuspendedComponent() {
  const user = await getCurrentUserSession();
  return <div>{user?.id || 'no session for this user'}</div>;
}

export default async function Page() {
  return (
    <>
      <h2>Personal profile page</h2>
      <Suspense fallback={<Skeleton />}>
        <SuspendedComponent />
      </Suspense>
    </>
  );
}
