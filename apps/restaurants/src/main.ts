import { NestFactory } from '@nestjs/core';
import { RestaurantsModule } from './restaurants.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(RestaurantsModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
