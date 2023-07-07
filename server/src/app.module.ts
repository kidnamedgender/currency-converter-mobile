import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { KnexModule } from 'nest-knexjs';

import { config } from 'dotenv';
import { knexConfig } from './configs/knexconfig';
config();
@Module({
    imports: [
        KnexModule.forRoot(knexConfig),
        HttpModule,
        ScheduleModule.forRoot(),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
