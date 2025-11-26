import { Injectable, NotFoundException } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsRepository } from './restaurants.repository';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(private restaurantsRepository: RestaurantsRepository) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantsRepository.find();
  }

  async findOne(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id },
    });

    if (!restaurant) {
      throw new NotFoundException();
    }

    return restaurant;
  }

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantsRepository.createRestaurant(createRestaurantDto);
  }

  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    const restaurant = await this.findOne(id);
    await this.restaurantsRepository.update(id, updateRestaurantDto);

    return restaurant;
  }

  async delete(id: string): Promise<void> {
    await this.restaurantsRepository.delete(id);
  }
}
