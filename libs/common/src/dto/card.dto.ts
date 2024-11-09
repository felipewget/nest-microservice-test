import { IsNumber, IsNumberString, IsString } from 'class-validator';
import Stripe from 'stripe';

export class CardDto {
  @IsString()
  cvc: string;

  @IsNumber()
  exp_month: number;

  @IsNumber()
  exp_year: number;

  //   Networks.Preferred
  //   networks?: Card.Networks;

  @IsString()
  number: string;

  //   token?: string;
}
