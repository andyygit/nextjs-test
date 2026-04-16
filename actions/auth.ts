'use server';

import { executePreparedInsert } from '@/data-access/config/db';
import { GenerateSalt, HashPassword } from './hash-password';

export async function SignUp(unsafeData) {
  // get form unsafe data
  // validate and parse unsafe data
  if (!success) return 'Nu s-a putut crea contul'; //todo
  const existingUser = await db.query(
    user.email == submissionForm.email || user.username == submissionForm.email,
  ); //todo
  if (existingUser)
    return 'Există deja un cont inregistrat cu această adresă de email';

  const hashedPassword = await HashPassword(thepassword, GenerateSalt()); //todo

  const dbUser = await executePreparedInsert('INSERT INTO `users` VALUES()', [
    '',
  ]);

  if (dbUser == 0) return 'Nu s-a putut crea contul';
}

export async function LogIn() {}

export async function LogOut() {}
