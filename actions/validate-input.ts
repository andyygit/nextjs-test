'use server';

import type { RegisterSchema } from '@/helpers/types';

const validateRules = {
  required: (item: string | undefined): string =>
    item === undefined || item === null || item === ''
      ? 'Camp obligatoriu'
      : '',
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
        : `Trebuie sa contina minim ${limit} caractere`,
  match: (pw1: string, pw2: string): string =>
    pw1 === pw2 ? '' : 'Parolele nu coincid',
};

export default async function ValidateInput(input: string) {
  const parsedInput = JSON.parse(input) as RegisterSchema;
  const e: RegisterSchema = {};
  e.username =
    validateRules.required(parsedInput.username) ||
    validateRules.minLength(5)(parsedInput.username?.trim());
  e.email =
    validateRules.required(parsedInput.email) ||
    validateRules.validEmail(parsedInput.email?.trim());
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
