import 'server-only';
// import { cacheLife } from 'next/cache';
import {
  createConnection,
  ExecuteValues,
  ResultSetHeader,
  RowDataPacket,
} from 'mysql2/promise';

const createConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
};

// interface User extends RowDataPacket {
//   id: number;
//   isPremium: number;
// }

async function executePreparedInsert(sql: string, values: ExecuteValues) {
  let connection;
  connection = await createConnection(createConnectionOptions);
  const [inserted] = await connection.execute<ResultSetHeader>(sql, values);
  if (connection) connection.end();
  return inserted.affectedRows;
}

async function executePreparedSelect(sql: string, values?: ExecuteValues) {
  // 'use cache';
  // cacheLife({
  //   stale: 300, //cache on client
  //   revalidate: 900, //cache on server
  //   expire: 1800, //fresh data after no traffic period
  // });
  let connection;
  connection = await createConnection(createConnectionOptions);
  const [results] = await connection.execute<RowDataPacket[]>(sql, values);
  if (connection) connection.end();
  return results;
}

async function executePreparedUpdate(sql: string, values: ExecuteValues) {
  let connection;
  connection = await createConnection(createConnectionOptions);
  const [updated] = await connection.execute<ResultSetHeader>(sql, values);
  if (connection) connection.end();
  return updated.affectedRows;
}

async function executePreparedDelete(sql: string, values: ExecuteValues) {
  let connection;
  connection = await createConnection(createConnectionOptions);
  const [deleted] = await connection.execute<ResultSetHeader>(sql, values);
  if (connection) connection.end();
  return deleted.affectedRows;
}

export {
  executePreparedInsert,
  executePreparedSelect,
  executePreparedUpdate,
  executePreparedDelete,
};
