import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';
import { MongoModule as ConfigMongoModule } from '@app/common/config/mongo/mongo.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigMongoModule],
      useFactory: (configConnection: ConfigService) => ({
        uri: configConnection.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
