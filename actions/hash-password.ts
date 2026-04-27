'use server';

import crypto from 'crypto';
import { buffer } from 'stream/consumers';

export async function HashPassword(
  password: string,
  salt: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize(), salt, 64, (error, hash) => {
      if (error) reject('Eroare procesare parola');
      resolve(hash.toString('hex').normalize()); //128 caractere
    });
  });
}

export async function GenerateSalt() {
  return crypto.randomBytes(16).toString('hex').normalize(); //32 caractere
}

export async function comparePassords({
  password,
  salt,
  hashedPassword,
}: {
  password: string;
  salt: string;
  hashedPassword: string;
}) {
  const inputHashedPassword = await HashPassword(password, salt);
  return crypto.timingSafeEqual(
    Buffer.from(inputHashedPassword, 'hex'),
    Buffer.from(hashedPassword, 'hex'),
  );
}
