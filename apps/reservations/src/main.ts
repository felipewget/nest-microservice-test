import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as coockieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);

  app.use(coockieParser());

  app.useGlobalPipes(new ValidationPipe());

  app.useLogger(app.get(Logger));

  const configService = app.get(ConfigService);

  await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
