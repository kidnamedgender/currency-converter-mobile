import type { Knex } from 'knex';
import { config } from 'dotenv';
config();

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
};

module.exports = knexConfig;
