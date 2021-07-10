// const { Client } = require('pg');
import pg from 'pg';
const connectionConfig = {
  user: 'admin',
  host: 'localhost',
  database: 'test',
  password: 'D1rkshna1der',
  port: 5432,
};

const client = new pg.Client(connectionConfig);
await client.connect();

export const findById = async (id) => {
  return client.query({
    text: 'SELECT * FROM new_users WHERE id = $1',
    values: [id],
    rowMode: 'array',
  });
};

await client.end();
