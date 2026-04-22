'use server';

import crypto from 'crypto';
import { cookies } from 'next/headers';
import { getUserByID, getUserSession } from '@/data-access/tblUsers';
import {
  SESSION_EXPIRATION_SECONDS,
  COOKIE_SESSION_KEY,
} from '@/helpers/constants';
import { redisClient } from '@/redis/redis';
import { SessionSchema } from '@/helpers/types';

export async function createUserSession(user: SessionSchema) {
  const sessionId = crypto.randomBytes(512).toString('hex').normalize();

  const redis = await redisClient.connect();
  await redis.set(`session:${sessionId}`, JSON.stringify(user), {
    expiration: {
      type: 'EX',
      value: SESSION_EXPIRATION_SECONDS,
    },
  });
  redis.destroy();

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
