import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'recipe',
})
export class RecipeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  uuid: string;
}
