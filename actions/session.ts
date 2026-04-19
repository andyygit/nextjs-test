'use server';

import crypto from 'crypto';
import { cookies } from 'next/headers';
import { getUserByID, getUserSession } from '@/data-access/tblUsers';
import {
  SESSION_EXPIRATION_SECONDS,
  COOKIE_SESSION_KEY,
} from '@/helpers/constants';

export async function createUserSession(user) {
  const sessionId = crypto.randomBytes(512).toString('hex').normalize();
  //todo store session in database //redis option?
  SESSION_EXPIRATION_SECONDS; //use session expiration in db// how to delete???
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_SESSION_KEY,
    value: 'crapu',
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
    expires: Date.now() + SESSION_EXPIRATION_SECONDS * 1000,
  });
}

export async function getUserFromSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;

  const session = await getUserSession(sessionId);
  if (session.length) {
    return await getUserByID(session[0].id);
  } else {
    return null;
  }
}
