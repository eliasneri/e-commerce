import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Product {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;

  @Column()
  price: number;
}
