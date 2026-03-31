'use client';
import { useState } from 'react';

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
};

interface FormData {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

export default function Page() {
  const [data, setData] = useState<FormData>({});
  const [errors, setErrors] = useState({});

  const handleChange = (key: string, value: string) => {
    setData((data) => ({ ...data, [key]: value }));
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
      data.password === data.passwordConfirm ? '' : 'Parolele nu coincid!';
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
          console.log(data);
        }}
      />
      <label htmlFor="email">Adresa ta de email</label>
      <input
        type="email"
        id="email"
        className="border"
        value={data.email || ''}
        onChange={(event) => {
          handleChange('email', event.target.value);
          console.log(data);
        }}
      />
      <label htmlFor="password">Alege o parola</label>
      <input
        type="password"
        id="password"
        className="border"
        value={data.password || ''}
        onChange={(event) => {
          handleChange('password', event.target.value);
          console.log(data);
        }}
      />
      <button className="mt-3" onClick={validateData}>
        Next
      </button>
    </div>
  );
}
