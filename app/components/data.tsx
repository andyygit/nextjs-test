import {createConnection} from 'mysql2/promise'
import type {QueryResult} from 'mysql2/promise'

export default async function executePreparedQuery(query: string, values: string[]) {
  let connection
  try {
    connection =  await createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'Parolavietiia',
      database: 'swgsite'
    })
    const [result] = await connection.execute(query, values)
    return result
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      // return {
      //   error: error.errno,
      //   details: error.sqlMessage
      // }
    }
  } finally {
    if (connection) connection.end()
  }
}