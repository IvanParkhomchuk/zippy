import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsRepository } from './restaurants.repository';
import { ProductsModule } from '../products/products.module';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Restaurant]),
    ProductsModule,
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, RestaurantsRepository],
})
export class RestaurantsModule {}
