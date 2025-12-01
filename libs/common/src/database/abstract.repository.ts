import { AbstractEntity } from '@app/common/database/abstract.entity';
import {
  EntityManager,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class AbstractRepository<T extends AbstractEntity<T>> {
  constructor(
    private readonly entityRepository: Repository<T>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(entity: T): Promise<T> {
    return this.entityManager.save(entity);
  }

  async findOne(
    where: FindOptionsWhere<T>,
    relations?: FindOptionsRelations<T>,
  ): Promise<T> {
    const entity = await this.entityRepository.findOne({ where, relations });

    if (!entity) {
      throw new NotFoundException();
    }

    return entity;
  }

  async findAll(where: FindOptionsWhere<T>): Promise<T[]> {
    return this.entityRepository.findBy(where);
  }

  async findAndUpdate(
    where: FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<T> {
    const updateResult = await this.entityRepository.update(
      where,
      partialEntity,
    );

    if (!updateResult.affected) {
      throw new NotFoundException();
    }

    return this.findOne(where);
  }

  async findAndDelete(where: FindOptionsWhere<T>): Promise<void> {
    await this.entityRepository.delete(where);
  }
}
