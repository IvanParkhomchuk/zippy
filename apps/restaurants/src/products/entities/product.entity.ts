import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '@app/common';
import { Restaurant } from '../../entities/restaurant.entity';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.products)
  restaurant: Restaurant;
}
