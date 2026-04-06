'use client';

import { useEffect, useState } from 'react';
import ValidateInput from '@/actions/validate-input';

export type RegisterSchema = {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export default function RegisterForm() {
  const [data, setData] = useState<RegisterSchema>({});
  const [errors, setErrors] = useState<RegisterSchema>({});

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

  async function validate(data: RegisterSchema) {
    setErrors(await ValidateInput(data));
  }

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
      <button className="mt-3" onClick={async () => await validate(data)}>
        Next
      </button>
    </div>
  );
}
