import { MysqlAbstractEntity } from '@app/common/database/mysql/mysqlAbstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Reservation extends MysqlAbstractEntity<Reservation> {
  @Column()
  timestamp: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: string;

  @Column()
  invoiceId: string;
}
