import { Pool } from 'pg';
import { config } from 'dotenv';
config();

export const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  }),
};
