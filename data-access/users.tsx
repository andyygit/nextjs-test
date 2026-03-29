import executePreparedQuery from '@/config/db';
// import { getKindeServerSession } from '@/config/auth';
import { redirect } from 'next/navigation';

type User = {
  id?: number;
  active?: number;
  username?: string;
  email?: number;
  joinDate?: Date;
  isPremium?: number;
  hasMessages?: number;
};

export async function getAllUsers() {
  /**
   * Here AUTHENTICATION CHECK
   */
  // const { isAuthenticated } = getKindeServerSession();
  // if (await isAuthenticated()) {
  if (!true) {
    redirect('/auth/login');
  }
  /**
   * END AUTHENTICATION CHECK
   */
  const users = await executePreparedQuery(
    'SELECT `id`, `active`, `username`, `email`, `joinDate`, `isPremium`, `hasMessages` FROM `users` WHERE `username` LIKE ?',
    ['%user%'],
  );
  if (users instanceof Error) {
    // console.log(`USERS as error --- ${users}`);
    return users as Error;
  } else {
    // console.log(users)
    return users as User[];
  }
}
