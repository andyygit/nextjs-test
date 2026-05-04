'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ValidateLoginInput } from '@/actions/validate-input';
import { LogIn } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import Alert from './ui/alert';
import FormBody from './ui/form/form-body';
import BasicInput from './ui/form/input';
import FormDivider from './ui/form/form-divider';
import type { LoginSchema } from '@/helpers/types';

export default function LoginForm() {
  const router = useRouter();
  const [data, setData] = useState<LoginSchema>({});
  const [errors, setErrors] = useState<LoginSchema>({});
  const [loginerror, setLoginerror] = useState('');

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

  async function validateAndLogin(data: LoginSchema) {
    const validateResults = await ValidateLoginInput(JSON.stringify(data));
    const parsedValidateResults = JSON.parse(validateResults);
    if (Object.keys(parsedValidateResults).length > 0) {
      setErrors(parsedValidateResults);
      return;
    }
    const loginStatusText = await LogIn(JSON.stringify(data));
    if (loginStatusText.length) {
      setLoginerror(loginStatusText);
      return;
    }
    router.push('/');
  }

  return (
    <FormBody>
      {loginerror && <Alert type="danger" message={loginerror} />}
      <BasicInput
        type="text"
        label="Utilizator"
        inputId="username"
        inputName="username"
        iconPrefix="@"
        inputPlaceholder="user"
        value={data.username || ''}
        onInputChange={handleChange}
      >
        {errors.username && (
          <p className="text-sm text-red-500 mt-1">{errors.username}</p>
        )}
      </BasicInput>
      <BasicInput
        type="password"
        label="Parola"
        inputId="password"
        inputName="password"
        inputPlaceholder="******"
        value={data.password || ''}
        onInputChange={handleChange}
      >
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password}</p>
        )}
      </BasicInput>
      <div className="col-span-full">
        <div className="mt-2">
          <button
            className="font-bold py-2 px-3 bg-gray-700 text-white w-full rounded-md"
            onClick={async () => await validateAndLogin(data)}
          >
            Login
          </button>
        </div>
      </div>
      <FormDivider text="SAU" />
      <div className="col-span-full">
        <p className="text-sm font-extralight">
          <span>Nu ai cont? </span>
          <Link
            href={{
              pathname: '/auth/register',
            }}
            className="text-indigo-600 font-semibold"
          >
            Înscrie-te
          </Link>
        </p>
      </div>
    </FormBody>
  );
}
