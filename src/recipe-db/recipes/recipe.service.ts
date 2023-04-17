import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeEntity } from './recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(RecipeEntity)
    private recipeRepository: Repository<RecipeEntity>,
  ) {}

  async findAll(page = 1, pageSize = 40): Promise<RecipeEntity[]> {
    return this.recipeRepository.find({
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }

  async findOneById(id: number): Promise<RecipeEntity> {
    return this.recipeRepository.findOneBy({ id: id });
  }

  async findOneByUuid(uuid: string): Promise<RecipeEntity> {
    return this.recipeRepository.findOneBy({ uuid: uuid });
  }

  async create(recipe: RecipeEntity): Promise<RecipeEntity> {
    return this.recipeRepository.save(recipe);
  }
}
