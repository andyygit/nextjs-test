import Link from 'next/link';
import {
  Search,
  UserRound,
  UserRoundPen,
  Inbox,
  CircleQuestionMark,
} from 'lucide-react';

export default function Navbar() {
  // const userSession: {} | false = false;
  const userSession = {
    id: 2,
    fullName: 'Gigi Manta',
    hasMessages: true,
  };
  return (
    <>
      {!userSession ? (
        <>
          <div className="flex items-center gap-4 max-md:hidden font-semibold">
            <Link
              href={{
                pathname: '/auth/login',
              }}
              className="shrink-0 text-sm/6 text-neutral-600 px-3 inset-ring inset-ring-neutral-600"
            >
              Log in
            </Link>
            <Link
              href={{
                pathname: '/auth/register',
              }}
              className="shrink-0 text-sm/6 text-white bg-neutral-600 px-3 inset-ring inset-ring-neutral-600"
            >
              Register
            </Link>
          </div>
          <div className="flex items-center gap-2.5 md:hidden">
            <Link
              href={{
                pathname: '/auth/login',
              }}
              className="inline-grid size-6 place-items-center"
            >
              <UserRound />
            </Link>
            <Link
              href={{
                pathname: '/auth/register',
              }}
              className="inline-grid size-6 place-items-center"
            >
              <UserRoundPen />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-6 max-md:hidden font-semibold">
            <Link
              href={{
                pathname: '/my-profile',
              }}
              className="text-sm/6 text-gray-950 shrink-0"
            >
              {userSession.fullName}
            </Link>
            <Link
              href={{ pathname: '/profiles' }}
              className="text-sm/6 text-gray-950 shrink-0"
            >
              Profile aleatoare
            </Link>
            <Link
              href={{ pathname: '/inbox' }}
              className="flex items-center gap-1 text-sm/6 text-gray-950 shrink-0"
            >
              {userSession.hasMessages ? (
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
                </span>
              ) : (
                ''
              )}
              <span>Mesaje</span>
            </Link>
            <Link
              href={{ pathname: '/favorites' }}
              className="text-sm/6 text-gray-950 shrink-0"
            >
              Favoriti
            </Link>
            <Link
              href={{
                pathname: '/help',
              }}
              className="inline-grid size-6 place-items-center"
            >
              <CircleQuestionMark strokeWidth={1.5} />
            </Link>
            <Link
              href={{ pathname: '/premium' }}
              className="group relative px-1.5 text-sm/6 text-indigo-800 shrink-0"
            >
              <span className="absolute inset-0 border border-dashed border-indigo-300/60 bg-indigo-400/10 group-hover:bg-indigo-400/15"></span>
              Premium
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute -top-0.5 -left-0.5 fill-indigo-300"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute -top-0.5 -right-0.5 fill-indigo-300"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute -bottom-0.5 -left-0.5 fill-indigo-300"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute -right-0.5 -bottom-0.5 fill-indigo-300"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
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
              }}
              className="inline-grid size-6 place-items-center"
            >
              <UserRound />
            </Link>
            <Link
              href={{
                pathname: '/inbox',
              }}
              className="relative inline-grid size-6 place-items-center"
            >
              <Inbox />
              {userSession.hasMessages ? (
                <span className="absolute top-0 -right-0.5 inline-flex size-2.5 rounded-full bg-red-500"></span>
              ) : (
                ''
              )}
            </Link>
            <Link
              href={{
                pathname: '/help',
              }}
              className="inline-grid size-6 place-items-center"
            >
              <CircleQuestionMark />
            </Link>
          </div>
        </>
      )}
    </>
  );
}
