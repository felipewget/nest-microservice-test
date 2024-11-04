import { MongoAbstractRepository } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends MongoAbstractRepository {}
