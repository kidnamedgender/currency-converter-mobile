import { DataBaseModule } from './db.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataBaseModule,
    HttpModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
