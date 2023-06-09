import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';
import { Knex } from 'knex';
import * as process from 'process';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class AppService {
    constructor(
        private readonly httpService: HttpService,
        @InjectConnection() private readonly knex: Knex,
    ) {}

    async getValutes(): Promise<object[]> {
        try {
            const res = await this.knex.raw('SELECT * FROM valute');
            return res.rows;
        } catch (err) {
            console.log('Не удалось получить валюты ' + err);
        }
    }

    @Cron(CronExpression.EVERY_5_SECONDS)
    async handleCron(): Promise<void> {
        try {
            // httpService возвращает Observable, для преобразования в Promise исользуется firstValueFrom (в прошлом .toPromise())
            const { data } = await firstValueFrom(
                this.httpService.get(process.env.URL),
            );

            await this.knex.raw('TRUNCATE TABLE valute');
            let values = '';
            Object.keys(data.Valute).map((key) => {
                values += `('${data.Valute[key].ID}',
                 ${data.Valute[key].NumCode}, 
                 '${data.Valute[key].CharCode}', 
                 ${data.Valute[key].Nominal}, 
                 '${data.Valute[key].Name}', 
                 ${data.Valute[key].Value}, 
                 ${data.Valute[key].Previous}),`;
            });

            values = values.slice(0, -1) + ';';

            const raw = `INSERT INTO valute (:ID:, :numCode:, :charCode:, :nominal:, :name:, :value:, :previous:)
                         VALUES ${values}`;

            // todo  https://knexjs.org/guide/raw.html#raw-parameter-binding сделать через бинд
            await this.knex.raw(raw, {
                ID: 'id',
                numCode: 'NumCode',
                charCode: 'CharCode',
                nominal: 'Nominal',
                name: 'Name',
                value: 'Value',
                previous: 'Previous',
            });
            console.log('Данные успешно обновлены');
        } catch (err) {
            console.log('Что-то пошло не так... ' + err);
        }
    }
}
