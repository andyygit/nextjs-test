export type RegisterSchema = {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

export type User = {
  id?: number;
  active?: number;
  username?: string;
  email?: number;
  joinDate?: Date;
  isPremium?: number;
  hasMessages?: number;
};
