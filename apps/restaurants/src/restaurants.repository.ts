import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from '@app/common';

@Injectable()
export class RestaurantsRepository extends AbstractRepository<Restaurant> {
  constructor(
    @InjectRepository(Restaurant)
    restaurantRepository: Repository<Restaurant>,
    entityManager: EntityManager,
  ) {
    super(restaurantRepository, entityManager);
  }
}
