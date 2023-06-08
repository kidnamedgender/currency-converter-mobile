import type { Knex } from 'knex';

import { config } from 'dotenv';
config();

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    version: '14.8',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
  },
};

export default  knexConfig