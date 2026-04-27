import 'server-only';

import {
  executePreparedInsert,
  executePreparedSelect,
} from '@/data-access/config/db';
import type { SignupRegisterSchema } from '@/helpers/types';
import type { RowDataPacket } from 'mysql2';

export async function insertNewUser(userdata: SignupRegisterSchema) {
  const { username, password, salt, email } = userdata;
  const insertNewUser = await executePreparedInsert(
    'INSERT INTO `users` (`username`, `password`, `salt`, `email`) VALUES(?, ?, ?, ?)',
    [username, password, salt, email],
  );
  console.log(insertNewUser);
  return insertNewUser;
}

type UserByEmail = RowDataPacket & {
  id: number;
};
type UserByUsername = UserByEmail & {
  isPremium: number;
};
type UserWithPassword = UserByUsername & {
  password: string;
  salt: string;
};

export async function getUserByUsername(searchName: string) {
  // Unprotected for login, register, check pass and validate
  const user = await executePreparedSelect(
    'SELECT `id`, `isPremium` FROM `users` WHERE `username` = ?',
    [searchName],
  );
  return user as UserByUsername[];
}

export async function getUserByEmail(searchEmail: string) {
  // Unprotected for login, register, check pass and validate
  const user = await executePreparedSelect(
    'SELECT `id` FROM `users` WHERE `email` = ?',
    [searchEmail],
  );
  return user as UserByEmail[];
}

export async function getUserWithPassword(searchName: string) {
  // Unprotected for login, register, check pass and validate
  const user = await executePreparedSelect(
    'SELECT `id`, `password`, `salt` FROM `users` WHERE `username` = ?',
    [searchName],
  );
  return user as UserWithPassword[];
}
