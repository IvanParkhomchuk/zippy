import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from '@app/common';

@Injectable()
export class ProductsRepository extends AbstractRepository<Product> {
  constructor(
    @InjectRepository(Product)
    productRepository: Repository<Product>,
    entityManager: EntityManager,
  ) {
    super(productRepository, entityManager);
  }
}
