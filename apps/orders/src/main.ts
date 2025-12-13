import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
