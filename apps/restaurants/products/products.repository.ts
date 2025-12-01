import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { AbstractRepository } from '@app/common/database/abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';

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
