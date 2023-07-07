import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Valute } from './dto/Valute.dto';

@Injectable()
export class AppService {
    constructor(
        private readonly httpService: HttpService,
        @InjectConnection() private readonly knex: Knex,
    ) {}

    async getValutes(): Promise<Valute[]> {
        try {
            const res = await this.knex.raw('SELECT * FROM valute');
            return res.rows;
        } catch (err) {
            console.log('Не удалось получить валюты ' + err);
        }
    }

    @Cron(CronExpression.EVERY_30_MINUTES)
    async handleCron(): Promise<void> {
        try {
            //todo httpService возвращает Observable, для преобразования в Promise исользуется firstValueFrom (в прошлом .toPromise())
            const { data } = await firstValueFrom(
                this.httpService.get(process.env.URL),
            );

            await this.knex.raw('TRUNCATE TABLE valute');

            const values = [];

            Object.keys(data.Valute).map((key) => {

                values.push(data.Valute[key].ID,
                    data.Valute[key].NumCode,
                    data.Valute[key].CharCode,
                    data.Valute[key].Nominal,
                    data.Valute[key].Name,
                    data.Valute[key].Value,
                    data.Valute[key].Previous)
            });

            const cols = ["id", "NumCode", "CharCode", "Nominal", "Name", "Value", "Previous"]

            const raw = (`INSERT INTO valute (${cols.map(col => `"${col}"`)}) VALUES ${Object.keys(data.Valute).map(val => `(`+cols.map(_ => '?').join(',')+`)`)};`);

            await this.knex.raw(raw, values);

            console.log('Данные успешно обновлены');
        } catch (err) {

            console.log('Что-то пошло не так... ' + err);
        }
    }
}
