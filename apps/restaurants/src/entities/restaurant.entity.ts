import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
