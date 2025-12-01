import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsRepository } from './restaurants.repository';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(private readonly restaurantsRepository: RestaurantsRepository) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantsRepository.findAll({});
  }

  async findOne(id: string): Promise<Restaurant> {
    return this.restaurantsRepository.findOne({ id });
  }

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = new Restaurant({ ...createRestaurantDto });

    return this.restaurantsRepository.create(restaurant);
  }

  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantsRepository.findAndUpdate(
      { id },
      updateRestaurantDto,
    );
  }

  async remove(id: string): Promise<void> {
    return this.restaurantsRepository.findAndDelete({ id });
  }
}
