'use server';

import crypto from 'crypto';
import { cookies } from 'next/headers';
import { redisClient } from '@/redis/redis';
import {
  SESSION_EXPIRATION_SECONDS,
  COOKIE_SESSION_KEY,
} from '@/helpers/constants';
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
    value: `${sessionId}`,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
    expires: Date.now() + SESSION_EXPIRATION_SECONDS * 1000,
  });
}

export async function getCurrentUserSession(): Promise<SessionSchema | null> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;

  const redis = await redisClient.connect();
  const rawUser = await redis.get(`session:${sessionId}`);
  redis.destroy();
  return rawUser ? (JSON.parse(rawUser) as SessionSchema) : null;
}

export async function removeUserSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;
  if (sessionId == null) return null;

  const redis = await redisClient.connect();
  await redis.del(`session:${sessionId}`);
  redis.destroy();

  cookieStore.delete(COOKIE_SESSION_KEY);
}
