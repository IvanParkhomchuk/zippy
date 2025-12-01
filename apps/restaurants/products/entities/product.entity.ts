import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/common/database/abstract.entity';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column()
  name: string;

  @Column()
  price: number;
}
