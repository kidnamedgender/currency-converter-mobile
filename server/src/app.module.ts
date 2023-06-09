import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { KnexModule } from 'nest-knexjs';
import { config } from 'dotenv';
import * as process from 'process';
config();
@Module({
    imports: [
        KnexModule.forRoot({
            config: {
                client: 'pg',
                version: '14.8',
                connection: {
                    host: process.env.POSTGRES_HOST,
                    user: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                },
            },
        }),
        HttpModule,
        ScheduleModule.forRoot(),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
