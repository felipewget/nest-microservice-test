import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongoModule as ConfigMongoModule } from '@app/common/config/mongo/mongo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigMongoModule],
      useFactory: (configConnection: ConfigService) => ({
        type: 'mysql',
        host: configConnection.getOrThrow('MYSQL_HOST'),
        port: configConnection.getOrThrow('MYSQL_PORT'),
        database: configConnection.getOrThrow('MYSQL_DATABASE'),
        username: configConnection.getOrThrow('MYSQL_USERNAME'),
        password: configConnection.getOrThrow('MYSQL_PASSWORD'),
        synchronize: configConnection.getOrThrow('MYSQL_SYNCHRONIZE'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MysqlModule {
  static forFeature(models: EntityClassOrSchema[]) {
    return TypeOrmModule.forFeature(models);
  }
}
