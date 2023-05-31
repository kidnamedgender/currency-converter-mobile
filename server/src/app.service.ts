import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('PG_CONNECTION') private conn: any,
    private readonly httpService: HttpService,
  ) {}

  async getValutes(): Promise<string> {
    try {
      const res = await this.conn.query('SELECT * FROM valute');
      return res.rows;
    } catch (err) {
      return 'Не удалось получить валюты ' + err;
    }
  }

  @Cron(CronExpression.EVERY_2_HOURS)
  async handleCron(): Promise<string> {
    try {
      const { data } = await firstValueFrom(
        this.httpService
          .get('https://www.cbr-xml-daily.ru/daily_json.js')
          .pipe(),
      );

      await this.conn.query('TRUNCATE TABLE valute');

      const valutes = Object.keys(data.Valute).map((key) => {
        return data.Valute[key];
      });

      for (let currentValute of valutes) {
        await this.conn.query(
          `INSERT INTO valute (id, "NumCode", "CharCode", "Nominal", "Name", "Value", "Previous") VALUES ('${currentValute.ID}','${currentValute.NumCode}','${currentValute.CharCode}','${currentValute.Nominal}', '${currentValute.Name}', '${currentValute.Value}', '${currentValute.Previous}')`,
        );
      }
      return data;
    } catch (err) {
      console.log('Что-то пошло не так... ' + err);
    }
  }
}
