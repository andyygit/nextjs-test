'use server';

import crypto from 'crypto';

export function HashPassword(password: string, salt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password.normalize(), salt, 64, (error, hash) => {
      if (error) reject('Eroare procesare parola');
      resolve(hash.toString('hex').normalize()); //128 caractere
    });
  });
}

export function GenerateSalt() {
  return crypto.randomBytes(16).toString('hex').normalize(); //32 caractere
}
