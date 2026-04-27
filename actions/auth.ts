'use server';

import {
  getUserByUsername,
  getUserWithPassword,
  insertNewUser,
} from '@/data-access/tblUsers';
import { comparePassords, GenerateSalt, HashPassword } from './hash-password';
import { createUserSession, removeUserSession } from './session';
import { redirect } from 'next/navigation';
import type {
  LoginSchema,
  RegisterSchema,
  SignupRegisterSchema,
} from '@/helpers/types';

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

export async function LogIn(loginData: string) {
  const parsedSignupData = JSON.parse(loginData) as LoginSchema;
  const loginUser = await getUserWithPassword(parsedSignupData.username!);
  if (loginUser.length == 0) return 'User inexistent';

  const isCorrectPassword = await comparePassords({
    password: parsedSignupData.password!,
    salt: loginUser[0].salt,
    hashedPassword: loginUser[0].password,
  });

  if (!isCorrectPassword) return 'Login incorect';

  await createUserSession({
    id: loginUser[0].id,
    isPremium: loginUser[0].isPremium == 1 ? true : false,
  });
  redirect('/');
}

export async function LogOut() {
  await removeUserSession();
  redirect('/');
}
