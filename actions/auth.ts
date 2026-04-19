'use server';

import { insertNewUser } from '@/data-access/tblUsers';
import { GenerateSalt, HashPassword } from './hash-password';
import { createUserSession } from './session';

export async function SignUp(unsafeData) {
  // get form unsafe data
  // validate and parse unsafe data
  if (!success) return 'Nu s-a putut crea contul'; //todo
  const existingUser = await db.query(
    user.email == submissionForm.email || user.username == submissionForm.email,
  ); //todo
  if (existingUser)
    return 'Există deja un cont inregistrat cu această adresă de email';

  const salt = GenerateSalt();
  const hashedPassword = await HashPassword(thepassword, salt); //todo

  const dbUser = await insertNewUser(userdata); //todo

  if (dbUser == 0) return 'Nu s-a putut crea contul';

  await createUserSession(user); //todo
}

export async function LogIn() {}

export async function LogOut() {}
