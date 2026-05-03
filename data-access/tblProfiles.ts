import 'server-only';

import {
  executePreparedInsert,
  executePreparedSelect,
} from '@/data-access/config/db';
import { getCurrentUserSession } from '@/actions/session';
import { redirect } from 'next/navigation';
import type { ProfileSchema } from '@/helpers/types';
import type { RowDataPacket } from 'mysql2';

export async function insertNewProfile(profiledata: ProfileSchema) {
  const { destructure from form} = profiledata;
  const insertNewProfile = await executePreparedInsert(
    'INSERT INTO `profiles` (`user_id`, `description`, .....etc) VALUES(?, ?, ?, ?)', //todo
    [username, password, salt, email],  //todo
  );
  console.log(insertNewProfile);
  return insertNewProfile;
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
    'SELECT `id`, `description` FROM `profiles` WHERE `username` LIKE ?', //todo correct join users
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
    'SELECT `id`, `description` FROM `profiles` ORDER BY `joinDate` DESC LIMIT 40', //todo correct join users
  );
  return users;
}
