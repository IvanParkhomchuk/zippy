import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/common';
import { Product } from '../products/entities/product.entity';

@Entity()
export class Restaurant extends AbstractEntity<Restaurant> {
  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.restaurant)
  products: Product[];
}
