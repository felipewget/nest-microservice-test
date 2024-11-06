import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';

@Module({
  imports: [],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class MongoModule {}
