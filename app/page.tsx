import { Suspense } from 'react';
import ProfilesList from '@/components/profiles-list';
import Skeleton from '@/components/skeleton';

export default async function Page() {
  return (
    <>
      <div className="text-lg font-semibold p-4">Last profiles fetcher</div>
      <Suspense fallback={<Skeleton />}>
        <ProfilesList />
      </Suspense>
      <div className="mt-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque velit
        quam corporis tempore, esse qui eius natus praesentium dolor minus nulla
        dolore doloribus, eaque quos est commodi laudantium quia, quae deserunt
        vitae ipsum consequuntur labore. Delectus amet sit sequi reprehenderit
        libero aut, nemo minima quo!
      </div>
    </>
  );
}
