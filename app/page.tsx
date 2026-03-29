import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <div>Home Page...</div>
      <Link
        href={{ pathname: '/profiles' }}
        className="font-semibold bg-indigo-600 text-white px-2.5 py-1.5 rounded-md block mt-2"
      >
        Profiles
      </Link>
    </>
  );
}
