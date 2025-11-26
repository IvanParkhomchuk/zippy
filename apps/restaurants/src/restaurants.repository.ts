import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';

@Injectable()
export class RestaurantsRepository extends Repository<Restaurant> {
  constructor(private dataSource: DataSource) {
    super(Restaurant, dataSource.createEntityManager());
  }

  async createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const { name } = createRestaurantDto;

    const restaurant = this.create({
      name,
    });

    await this.save(restaurant);

    return restaurant;
  }
}
