import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
    imports: [HttpModule, ScheduleModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
