import { PrimaryGeneratedColumn } from 'typeorm';

export class MysqlAbstractEntity<T> {
  @PrimaryGeneratedColumn()
  id: number;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
