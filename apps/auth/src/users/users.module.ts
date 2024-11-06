import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongoModule } from '@app/common/database/mongo/mongo.module';
import { UserDocument, UserSchema } from './models/user.schema';
import { UserRepository } from './users.repository';

@Module({
  imports: [
    MongoModule,
    MongoModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
