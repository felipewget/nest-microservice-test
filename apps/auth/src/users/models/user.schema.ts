import { MongoAbstractDocument } from '@app/common/database/mongo/mongoAbstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UserDocument extends MongoAbstractDocument {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
