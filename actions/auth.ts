'use server';

import { getUserByUsername, insertNewUser } from '@/data-access/tblUsers';
import { GenerateSalt, HashPassword } from './hash-password';
import { createUserSession } from './session';
import { redirect } from 'next/navigation';
import { RegisterSchema, SignupRegisterSchema } from '@/helpers/types';

export async function SignUp(signupData: string) {
  const parsedSignupData = JSON.parse(signupData) as RegisterSchema;
  try {
    const salt = await GenerateSalt();
    const hashedPassword = await HashPassword(parsedSignupData.password!, salt);
    const newUser: SignupRegisterSchema = {
      username: parsedSignupData.username!,
      password: hashedPassword,
      email: parsedSignupData.email!,
      salt: salt,
    };

    const dbUser = await insertNewUser(newUser);

    if (dbUser == 0) return 'Nu s-a putut crea contul';
  } catch (err) {
    return 'Nu s-a putut crea contul';
    // return err;
  }

  const loginUser = await getUserByUsername(parsedSignupData.username!);
  if (loginUser.length == 0) return 'User inexistent';

  await createUserSession({
    id: loginUser[0].id,
    isPremium: loginUser[0].isPremium == 1 ? true : false,
  });
  redirect('/');
}

export async function LogIn() {}

export async function LogOut() {}
