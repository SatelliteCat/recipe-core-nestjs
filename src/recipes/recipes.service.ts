import { Injectable } from '@nestjs/common';
import { RecipeService } from '../recipe-db/recipes/recipe.service';

interface GetAllRequest {
  q: string;
  p: number;
}

@Injectable()
export class RecipesService {
  constructor(private recipeRepository: RecipeService) {}

  getOneByUuid(uuid: string) {
    return this.recipeRepository.findOneByUuid(uuid);
  }

  getAll(params: GetAllRequest) {
    return this.recipeRepository.findAll(params.p);
  }
}
