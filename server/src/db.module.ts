import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { dbProvider } from './db.config';

@Module({
  imports: [ConfigModule.forRoot({})],
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DataBaseModule {}
