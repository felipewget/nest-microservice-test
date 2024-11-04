import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from '@app/common/database';

@Module({
  imports: [MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
