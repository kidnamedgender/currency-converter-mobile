import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
    CREATE TABLE IF NOT EXISTS valute (
      id character varying(32) NOT NULL PRIMARY KEY,
      "NumCode" character varying(9) NOT NULL,
      "CharCode" character varying(9) NOT NULL,
      "Nominal" int NOT NULL,
      "Name" character varying(64) NOT NULL,
      "Value" real NOT NULL,
      "Previous" real NOT NULL
    )
  `);
}

export async function down(): Promise<void> {
    return null;
}
