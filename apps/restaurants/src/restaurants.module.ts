import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsRepository } from './restaurants.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    TypeOrmModule.forFeature([Restaurant]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService, RestaurantsRepository],
})
export class RestaurantsModule {}
