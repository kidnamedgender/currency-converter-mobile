import type { Knex } from 'knex';
import { config } from 'dotenv';
config();

const knexFile: { [key: string]: Knex.Config } = {
    development: {
        client: 'pg',
        version: '14.8',
        connection: {
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
        },
        migrations: {
            directory: './src/migrations',
        },
    },
};

export default knexFile;
