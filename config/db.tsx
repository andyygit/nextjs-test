import { createConnection } from 'mysql2/promise';

export default async function executePreparedQuery(
  query: string,
  values: string[],
) {
  let connection;
  connection = await createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Parolavietii',
    database: 'swgsite',
  });
  const [result] = await connection.execute(query, values);
  if (result instanceof Error) {
    console.error(result as Error);
    if (connection) connection.end();
    return result as Error;
  }
  if (connection) connection.end();
  return result;
}
