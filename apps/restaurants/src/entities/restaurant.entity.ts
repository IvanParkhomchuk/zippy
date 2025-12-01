import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/common/database/abstract.entity';

@Entity()
export class Restaurant extends AbstractEntity<Restaurant>{
  @Column()
  name: string;
}
