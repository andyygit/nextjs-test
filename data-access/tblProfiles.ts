import 'server-only';

import {
  executePreparedInsert,
  executePreparedSelect,
} from '@/data-access/config/db';
// import { getKindeServerSession } from '@/config/auth';
import { getCurrentUserSession } from '@/actions/session';
import { redirect } from 'next/navigation';
import type { ProfileSchema } from '@/helpers/types';
import type { RowDataPacket } from 'mysql2';

export async function insertNewUser(userdata: ProfileSchema) {
  const { destructure from form} = userdata;
  const insertNewProfile = await executePreparedInsert(
    'INSERT INTO `profiles` (`user_id`, `description`, .....etc) VALUES(?, ?, ?, ?)', //todo
    [username, password, salt, email],  //todo
  );
  console.log(insertNewUser);
  return insertNewUser;
}

type ProfileByUsername = RowDataPacket & {
  //remake
};

export async function getProfilesLike(namelike: string) {
  const currentUser = await getCurrentUserSession();
    if (!currentUser) {
      return redirect('/auth/login');
    }
  const users = await executePreparedSelect(
    'SELECT `id` FROM `profiles` WHERE `username` LIKE ?', //join users
    [`%${namelike}}%`],
  );
  return users as ProfileByUsername[];
}

export async function getNewestProfiles() {
  const currentUser = await getCurrentUserSession();
  if (!currentUser) {
    return redirect('/auth/login');
  }
  const users = await executePreparedSelect(
    'SELECT `id` FROM `profiles` ORDER BY `joinDate` DESC LIMIT 40', //join users
  );
  return users;
}
