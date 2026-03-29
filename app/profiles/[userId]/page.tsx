export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  // console.log(params);
  return <div>Showing details for user {userId}</div>;
}
