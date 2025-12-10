import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, UseGuards,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { JwtAuthGuard } from '@app/common';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Restaurant[]> {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantsService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<void> {
    return this.restaurantsService.remove(id);
  }
}
