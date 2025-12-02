import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/common';

@Entity()
export class Restaurant extends AbstractEntity<Restaurant> {
  @Column()
  name: string;
}
