// const connect = async () => {
//   const client = new Client(connectionConfig);
//   try {
//     await client.connect();
//     await client.query(`CREATE TABLE IF NOT EXISTS new_users (
//       ID SERIAL PRIMARY KEY,
//       PHONE TEXT,
//       PASS TEXT,
//       API_ID TEXT,
//       API_HASH TEXT,
//       LITECOIN TEXT
//     )`);

//     // const res = await client.query(
//     //   'INSERT INTO new_users (PHONE, PASS, API_ID, API_HASH, LITECOIN) VALUES ($1,$2,$3,$4,$5) RETURNING *',
//     //   ['+7999', 'D1rk Test', '987jsdf_ajsd', '978_nfgofoga', 'ltc99999999']
//     // );
//     // console.log(res.rows); // Hello world!

//     const allRows = await client.query({
//       text: 'SELECT * FROM new_users',
//       rowMode: 'array',
//     });
//     console.log(allRows.rows);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     await client.end();
//   }
// };

// connect();

// await client.end();
import { findById } from './pgModule.mjs';
// const pg = require('./pgModule.mjs');

const { rows } = await findById(3);

console.log(rows);
