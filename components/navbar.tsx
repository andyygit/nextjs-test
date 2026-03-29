import Link from 'next/link';
import { Search, UserRound, Inbox } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <div className="flex items-center gap-6 max-md:hidden">
        <Link
          href={{
            pathname: '/auth/login',
          }}
          className="shrink-0 text-sm/6 text-neutral-600 px-3 inset-ring inset-ring-neutral-600 rounded-md"
        >
          Log in
        </Link>
        <Link
          href={{
            pathname: '/auth/register',
          }}
          className="shrink-0 text-sm/6 text-white bg-neutral-600 px-3 inset-ring inset-ring-neutral-600 rounded-md"
        >
          Register
        </Link>
      </div>
      <div className="flex items-center gap-2.5 md:hidden">
        <Link
          href={{
            pathname: '/search',
            query: { name: 'test' },
          }}
          className="inline-grid size-6 place-items-center"
        >
          <Search />
        </Link>
        <Link
          href={{
            pathname: '/my-profile',
            query: { name: 'test' },
          }}
          className="inline-grid size-6 place-items-center"
        >
          <UserRound />
        </Link>
        <Link
          href={{
            pathname: '/inbox',
            query: { name: 'test' },
          }}
          className="relative inline-grid size-6 place-items-center"
        >
          <Inbox />
          <span className="absolute top-0 -right-0.5 inline-flex size-2.5 rounded-full bg-red-500"></span>
        </Link>
      </div>
    </>
  );
}
