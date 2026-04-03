import 'server-only';
import executePreparedQuery from '@/data-access/config/db';
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

export async function getUserID(id: number) {
  /**
   * Here AUTHENTICATION CHECK
   */
  // const { isAuthenticated } = getKindeServerSession();
  // if (await isAuthenticated()) {
  if (!true) {
    redirect('/auth/login'); //use proxy with NextResponse.redirect
  }
  /**
   * END AUTHENTICATION CHECK
   */
  const users = await executePreparedQuery(
    'SELECT `id`, `active`, `username`, `email`, `joinDate`, `isPremium`, `hasMessages` FROM `users` WHERE `id` = ?',
    [id],
  );
  if (users instanceof Error) {
    // console.log(`USERS as error --- ${users}`);
    return users as Error;
  } else {
    // console.log(users)
    return users as User[];
  }
}

export async function getUserLike() {
  /**
   * Here AUTHENTICATION CHECK
   */
  // const { isAuthenticated } = getKindeServerSession();
  // if (await isAuthenticated()) {
  if (!true) {
    redirect('/auth/login'); //use proxy with NextResponse.redirect
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

export async function getNewestUsers() {
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
    'SELECT `id`, `active`, `username`, `email`, `joinDate`, `isPremium`, `hasMessages` FROM `users` ORDER BY `joinDate` DESC LIMIT 40',
  );
  if (users instanceof Error) {
    // console.log(`USERS as error --- ${users}`);
    return users as Error;
  } else {
    // console.log(users)
    return users as User[];
  }
}
