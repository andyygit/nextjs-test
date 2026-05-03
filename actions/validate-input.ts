'use server';

import { getUserByEmail, getUserByUsername } from '@/data-access/tblUsers';
import type { RegisterSchema, LoginSchema } from '@/helpers/types';

const validateRules = {
  required: (item: string | undefined): string =>
    item === undefined || item === null || item === ''
      ? 'Camp obligatoriu'
      : '',
  validUsername: (username: string | undefined): string =>
    username && /^[0-9a-zA-Z]{1,25}$/.test(username) ? '' : 'User invalid',
  validEmail: (email: string | undefined): string =>
    email &&
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(
      email,
    )
      ? ''
      : 'Adresa de mail invalida',
  minLength:
    (limit: number) =>
    (valueToCheck: string | undefined): string =>
      valueToCheck && valueToCheck.length >= limit
        ? ''
        : `Trebuie sa contina minim ${limit} caractere, maxim 25`,
  match: (pw1: string, pw2: string): string =>
    pw1 === pw2 ? '' : 'Parolele nu coincid',
  userExists: async (user: string): Promise<string> =>
    (await getUserByUsername(user)).length ? 'Acest user deja exista' : '',
  emailExists: async (email: string): Promise<string> =>
    (await getUserByEmail(email)).length
      ? 'Adresa de mail este deja folosita'
      : '',
};

export async function ValidateRegisterInput(input: string) {
  const parsedInput = JSON.parse(input) as RegisterSchema;
  const e: RegisterSchema = {};
  e.username =
    validateRules.required(parsedInput.username) ||
    validateRules.validUsername(parsedInput.username?.trim()) ||
    validateRules.minLength(5)(parsedInput.username?.trim()) ||
    (await validateRules.userExists(parsedInput.username!));
  e.email =
    validateRules.required(parsedInput.email) ||
    validateRules.validEmail(parsedInput.email?.trim()) ||
    (await validateRules.emailExists(parsedInput.email!));
  e.password =
    validateRules.required(parsedInput.password) ||
    validateRules.minLength(8)(parsedInput.password?.trim());
  e.passwordConfirm =
    validateRules.required(parsedInput.passwordConfirm) ||
    validateRules.match(parsedInput.password!, parsedInput.passwordConfirm!);
  return Object.values(e).every((val) => val === '')
    ? JSON.stringify({})
    : JSON.stringify(e);
}

export async function ValidateLoginInput(input: string) {
  const parsedInput = JSON.parse(input) as LoginSchema;
  const e: LoginSchema = {};
  e.username = validateRules.required(parsedInput.username);
  e.password = validateRules.required(parsedInput.password);
  return Object.values(e).every((val) => val === '')
    ? JSON.stringify({})
    : JSON.stringify(e);
}

export async function SanitizeTextInput(input: string) {
  return input.replaceAll(
    /\d|zero|unu|doi|trei|patru|cinci|sase|șase|sapte|șapte|opt|noua|nouă/g,
    '',
  );
}
