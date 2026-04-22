import 'server-only';

import type { SignupRegisterSchema } from '@/helpers/types';
import {
  executePreparedInsert,
  executePreparedSelect,
} from '@/data-access/config/db';
// import { getKindeServerSession } from '@/config/auth';
import { redirect } from 'next/navigation';

export async function insertNewUser(userdata: SignupRegisterSchema) {
  const { username, password, salt, email } = userdata;
  const insertNewUser = executePreparedInsert(
    'INSERT INTO `users` (`username`, `password`, `salt`, `email`) VALUES(?, ?, ?, ?)',
    [username, password, salt, email],
  );
  return insertNewUser;
}

export async function getUserByID(searchID: number) {
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
  const user = await executePreparedSelect(
    'SELECT `id`, `active`, `username`, `email`, `joinDate`, `isPremium`, `hasMessages` FROM `users` WHERE `id` = ?',
    [searchID],
  );
  return user;
}

export async function getUserByUsername(searchName: string) {
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
  const user = await executePreparedSelect(
    'SELECT `id` FROM `users` WHERE `username` = ?',
    [searchName],
  );
  return user;
}

export async function getUserByEmail(searchEmail: string) {
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
  const user = await executePreparedSelect(
    'SELECT `id` FROM `users` WHERE `email` = ?',
    [searchEmail],
  );
  return user;
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
  const users = await executePreparedSelect(
    'SELECT `id`, `active`, `username`, `email`, `joinDate`, `isPremium`, `hasMessages` FROM `users` WHERE `username` LIKE ?',
    ['%user%'],
  );
  return users;
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
  const users = await executePreparedSelect(
    'SELECT `id`, `active`, `username`, `email`, `joinDate`, `isPremium`, `hasMessages` FROM `users` ORDER BY `joinDate` DESC LIMIT 40',
  );
  return users;
}

export async function getUserSession(sessionID: string) {
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
  const userSession = await executePreparedSelect(
    'SELECT `user_id` FROM `sessions` WHERE `session_id` = ?',
    [sessionID],
  );
  return userSession;
}
