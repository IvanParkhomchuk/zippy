import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { Restaurant } from '../entities/restaurant.entity';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productsRepository.create({
      name: createProductDto.name,
      price: createProductDto.price,
      restaurant: { id: createProductDto.restaurantId } as Restaurant,
    });
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.findAll({});
  }

  async findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne({ id });
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsRepository.findAndUpdate({ id }, updateProductDto);
  }

  async remove(id: string): Promise<void> {
    return this.productsRepository.findAndDelete({ id });
  }
}
