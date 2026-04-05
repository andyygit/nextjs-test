import { Suspense } from 'react';
import { getUserID } from '@/data-access/tblUsers';
import Skeleton from '@/components/skeleton';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  // const profile = await getUserID(parseInt(userId));
  // to be deleted
  const profiles = [
    {
      id: 1,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Florin Piersic',
      location: 'Constanta',
      ispremium: true,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sequi.',
    },
    {
      id: 2,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Draga Olteanu',
      location: 'Bucuresti',
      ispremium: false,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure exercitationem mollitia quisquam minus delectus.',
    },
    {
      id: 3,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Colea Rautu',
      location: 'Cluj Napoca',
      ispremium: true,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, soluta labore dicta accusantium, laboriosam at, libero facere est atque dolores recusandae? At eius omnis possimus pariatur commodi aut velit veritatis?',
    },
    {
      id: 4,
      imgpath: 'https://placehold.co/960x540/90a1b9/FFF',
      fullname: 'Elena Cucu',
      location: 'Constanta',
      ispremium: true,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis placeat quo et.',
    },
  ];
  const profile = profiles.find((p) => p.id === parseInt(userId, 10));
  // ---------------
  return <div>This is the ID {userId} personal data</div>;
  return notFound();
}
