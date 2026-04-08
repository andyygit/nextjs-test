import { createContext } from 'react';
import { User } from '@/helpers/types';

export const UserContext = createContext<Promise<User> | null>(null);

export default function UserProvider({
  children,
  userPromise,
}: {
  children: React.ReactNode;
  userPromise: Promise<User>;
}) {
  return <UserContext value={userPromise}>{children}</UserContext>;
}
