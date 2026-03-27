import executePreparedQuery from '@/config/db';
import { getKindeServerSession } from '@/config/auth';
import { redirect } from 'next/dist/server/api-utils';

export async function Userlist() {
  /**
   * Here AUTHENTICATION CHECK
   */
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) {
    redirect('/auth/login');
  }
  /**
   * END AUTHENTICATION CHECK
   */
  const users = await executePreparedQuery(
    'SELECT * FROM `users` WHERE `username` LIKE ?',
    ['%user%'],
  );
  if (users instanceof Error) {
    console.log(`USERS as error --- ${users}`);
    return <div>Error getting data</div>;
  } else {
    const result = (users as object[]).map((item) => (
      <div key={item.id}>{item.username}</div>
    ));
    return <div className="bg-green-200">{result}</div>;
  }
}
