import { Suspense } from 'react';
import { getUserID } from '@/data-access/tblUsers';
import Skeleton from '@/components/skeleton';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = await getUserID(parseInt(slug));
  console.log(profile);
  return <div>This is the ID personal data</div>;
}
