import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../../interfaces/user.interface';

@Entity({
  name: 'user',
})
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  uuid: string;
}
