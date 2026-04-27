'use client';

import { useEffect, useState } from 'react';
import { ValidateLoginInput } from '@/actions/validate-input';
import { LogIn } from '@/actions/auth';
import type { LoginSchema } from '@/helpers/types';

export default function LoginForm() {
  const [data, setData] = useState<LoginSchema>({});
  const [errors, setErrors] = useState<LoginSchema>({});

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

  async function validate(data: LoginSchema) {
    const validateResults = await ValidateLoginInput(JSON.stringify(data));
    const parsedValidateResults = JSON.parse(validateResults);
    if (Object.keys(parsedValidateResults).length > 0) {
      setErrors(parsedValidateResults);
    } else {
      await LogIn(JSON.stringify(data));
    }
  }

  return (
    <div className="flex flex-col p-4">
      <label htmlFor="username">Utilizator</label>
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
      <button className="mt-3" onClick={async () => await validate(data)}>
        Next
      </button>
    </div>
  );
}
