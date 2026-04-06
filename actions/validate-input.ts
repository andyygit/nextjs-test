'use server';

import type { RegisterSchema } from '@/components/register-form';

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

export default async function ValidateInput(input: RegisterSchema) {
  const e: RegisterSchema = {};
  e.username =
    validateRules.required(input.username) ||
    validateRules.minLength(5)(input.username?.trim());
  e.email =
    validateRules.required(input.email) ||
    validateRules.validEmail(input.email?.trim());
  e.password =
    validateRules.required(input.password) ||
    validateRules.minLength(8)(input.password?.trim());
  e.passwordConfirm =
    validateRules.required(input.passwordConfirm) ||
    validateRules.match(input.password!, input.passwordConfirm!);
  return Object.values(e).every((val) => val === '') ? {} : e;
}
