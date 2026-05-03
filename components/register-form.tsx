'use client';

import { useEffect, useState } from 'react';
import { ValidateRegisterInput } from '@/actions/validate-input';
import { SignUp } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import type { RegisterSchema } from '@/helpers/types';
import FormBody from './ui/form/form-body';
import Alert from './ui/alert';
import BasicInput from './ui/form/input';
import FormDivider from './ui/form/form-divider';
import Link from 'next/link';

export default function RegisterForm() {
  const router = useRouter();
  const [data, setData] = useState<RegisterSchema>({});
  const [errors, setErrors] = useState<RegisterSchema>({});
  const [registererror, setRegistererror] = useState('');

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

  async function validateAndSignup(data: RegisterSchema) {
    const validateResults = await ValidateRegisterInput(JSON.stringify(data));
    const parsedValidateResults = JSON.parse(validateResults);
    if (Object.keys(parsedValidateResults).length > 0) {
      setErrors(parsedValidateResults);
      return;
    }
    const signupStatusText = await SignUp(JSON.stringify(data));
    if (signupStatusText.length) {
      setRegistererror(signupStatusText);
      return;
    }
    router.push('/');
  }

  return (
    <FormBody>
      {registererror && <Alert type="danger" message={registererror} />}
      <BasicInput
        type="text"
        label="Alege nume utilizator"
        inputName="username"
        inputPlaceholder="JohnDoe"
        value={data.username || ''}
        onInputChange={handleChange}
      >
        {errors.username && (
          <p className="text-sm text-red-500 mt-1">{errors.username}</p>
        )}
      </BasicInput>
      <BasicInput
        type="email"
        label="Adresa ta de mail"
        inputName="email"
        inputPlaceholder="john@doe.com"
        value={data.email || ''}
        onInputChange={handleChange}
      >
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </BasicInput>
      <BasicInput
        type="password"
        label="Alege o parola"
        inputName="password"
        inputPlaceholder="******"
        value={data.password || ''}
        onInputChange={handleChange}
      >
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password}</p>
        )}
      </BasicInput>
      <BasicInput
        type="password"
        label="Confirmare parola"
        inputName="passwordConfirm"
        inputPlaceholder="******"
        value={data.passwordConfirm || ''}
        onInputChange={handleChange}
      >
        {errors.passwordConfirm && (
          <p className="text-sm text-red-500 mt-1">{errors.passwordConfirm}</p>
        )}
      </BasicInput>
      <div className="col-span-full">
        <div className="mt-2">
          <button
            className="font-bold py-2 px-3 bg-gray-700 text-white w-full rounded-md"
            onClick={async () => await validateAndSignup(data)}
          >
            Creează cont
          </button>
        </div>
      </div>
      <FormDivider text="SAU" />
      <div className="col-span-full">
        <p className="text-sm font-extralight">
          <span>Ai deja cont? </span>
          <Link
            href={{
              pathname: '/auth/login',
            }}
            className="text-indigo-600 font-semibold"
          >
            Intră în cont
          </Link>
        </p>
        <p className="font-extrabold">de adaugat buton termeni si conditii</p>
      </div>
    </FormBody>
  );
}
