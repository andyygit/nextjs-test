export type RegisterSchema = {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export type User = {
  id?: number;
  active?: boolean;
  username?: string;
  email?: string;
  joinDate?: Date;
  isPremium?: boolean;
  hasMessages?: boolean;
};
