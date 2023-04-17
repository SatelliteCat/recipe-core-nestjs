import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private recipeRepository: Repository<UserEntity>,
  ) {}

  async findAll(page = 1, pageSize = 40): Promise<UserEntity[]> {
    return this.recipeRepository.find({
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }

  async findOneById(id: number): Promise<UserEntity> {
    return this.recipeRepository.findOneBy({ id: id });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return this.recipeRepository.findOneBy({ email: email });
  }

  async findOneByUuid(uuid: string): Promise<UserEntity> {
    return this.recipeRepository.findOneBy({ uuid: uuid });
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return this.recipeRepository.save(user);
  }
}
