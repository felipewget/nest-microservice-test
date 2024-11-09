import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';
import * as coockieParser from 'cookie-parser';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(PaymentsModule);

  app.use(coockieParser());

  const configService = app.get(ConfigService);

  app.useLogger(app.get(Logger));

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configService.get('TCP_PORT'),
    },
  });

  await app.startAllMicroservices();
  // await app.listen(process.env.port ?? 3004); // Not external http
}
bootstrap();
