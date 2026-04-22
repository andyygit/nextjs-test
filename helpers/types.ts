export type RegisterSchema = {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export type SignupRegisterSchema = Required<
  Omit<RegisterSchema, 'passwordConfirm'>
> & {
  salt: string;
};

export type User = {
  id: number;
  active: boolean;
  username: string;
  email: string;
  joinDate: Date;
  isPremium: boolean;
  hasMessages: boolean;
  altceva: string;
};
