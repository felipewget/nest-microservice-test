import { Injectable, Logger } from '@nestjs/common';
import { Reservation } from './models/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { MysqlAbstractRepository } from '@app/common/database/mysql/mysqlAbstract.repository';

@Injectable()
export class ReservationRepository extends MysqlAbstractRepository<Reservation> {
  protected readonly logger = new Logger(ReservationRepository.name);

  constructor(
    @InjectRepository(Reservation)
    reservationRepository: Repository<Reservation>,
    entityManager: EntityManager,
  ) {
    super(reservationRepository, entityManager);
  }
}
