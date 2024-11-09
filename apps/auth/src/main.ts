import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as coockieParser from 'cookie-parser';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  app.use(coockieParser());

  app.useGlobalPipes(new ValidationPipe());

  app.useLogger(app.get(Logger));

  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configService.get('TCP_PORT'),
    },
  });

  await app.startAllMicroservices();

  await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
