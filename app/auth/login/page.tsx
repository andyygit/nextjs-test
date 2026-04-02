'use client';
import { useEffect, useState } from 'react';

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

type FormData = {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export default async function Page() {
  const [data, setData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormData>({});

  // useEffect(() => {
  //   console.log('effect');
  //   console.log(errors);
  //   return () => {
  //     console.log('clean up fn');
  //     console.log(errors);
  //   };
  // }, [errors]);

  const handleChange = (key: string, value: string) => {
    setData((data) => ({ ...data, [key]: value }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validateData = () => {
    const e: FormData = {};
    e.username =
      validateRules.required(data.username) ||
      validateRules.minLength(5)(data.username);
    e.email =
      validateRules.required(data.email) ||
      validateRules.validEmail(data.email);
    e.password =
      validateRules.required(data.password) ||
      validateRules.minLength(8)(data.password);
    e.passwordConfirm =
      validateRules.required(data.passwordConfirm) ||
      validateRules.match(data.password!, data.passwordConfirm!);
    setErrors(e);
    return Object.values(e).every((val) => val === '');
  };

  return (
    <div className="flex flex-col p-6">
      <label htmlFor="username">Alege un nume utilizator</label>
      <input
        type="text"
        id="username"
        className="border"
        value={data.username || ''}
        onChange={(event) => {
          handleChange('username', event.target.value);
        }}
      />
      {errors.username && (
        <p className="text-sm text-red-500 mt-1">{errors.username}</p>
      )}
      <label htmlFor="email">Adresa ta de email</label>
      <input
        type="email"
        id="email"
        className="border"
        value={data.email || ''}
        onChange={(event) => {
          handleChange('email', event.target.value);
        }}
      />
      {errors.email && (
        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
      )}
      <label htmlFor="password">Alege o parola</label>
      <input
        type="password"
        id="password"
        className="border"
        value={data.password || ''}
        onChange={(event) => {
          handleChange('password', event.target.value);
        }}
      />
      {errors.password && (
        <p className="text-sm text-red-500 mt-1">{errors.password}</p>
      )}
      <label htmlFor="passwordConfirm">Introdu parola din nou</label>
      <input
        type="password"
        id="passwordConfirm"
        className="border"
        value={data.passwordConfirm || ''}
        onChange={(event) => {
          handleChange('passwordConfirm', event.target.value);
        }}
      />
      {errors.passwordConfirm && (
        <p className="text-sm text-red-500 mt-1">{errors.passwordConfirm}</p>
      )}
      <button className="mt-3" onClick={validateData}>
        Next
      </button>
    </div>
  );
}
