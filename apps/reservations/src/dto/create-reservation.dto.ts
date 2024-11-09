import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  ValidateNested,
  isDefined,
} from 'class-validator';
import Stripe from 'stripe';
import { CardDto } from '../../../../libs/common/src/dto/card.dto';
import { CreateChargeDto } from '@app/common/dto/create-charge.dto';

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  charge: CreateChargeDto;
}
