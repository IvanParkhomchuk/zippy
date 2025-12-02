import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from '@app/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
  constructor(
    @InjectRepository(User)
    userRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(userRepository, entityManager);
  }
}
