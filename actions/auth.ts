'use server';

import { RegisterSchema, SignupRegisterSchema } from '@/helpers/types';
import { insertNewUser } from '@/data-access/tblUsers';
import { GenerateSalt, HashPassword } from './hash-password';
import { createUserSession } from './session';

export async function SignUp(signupData: RegisterSchema) {
  try {
    const salt = GenerateSalt();
    const hashedPassword = await HashPassword(signupData.password!, salt);
    const newUser: SignupRegisterSchema = {
      username: signupData.username!,
      password: hashedPassword,
      email: signupData.email!,
      salt: salt,
    };

    const dbUser = await insertNewUser(newUser); //todo

    if (dbUser == 0) return 'Nu s-a putut crea contul';
  } catch {
    return 'Nu s-a putut crea contul';
  }

  await createUserSession(user); //todo
}

export async function LogIn() {}

export async function LogOut() {}
