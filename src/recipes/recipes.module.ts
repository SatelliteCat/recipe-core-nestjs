import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { RecipeDbModule } from '../recipe-db/recipe-db.module';

@Module({
  providers: [RecipesService],
  controllers: [RecipesController],
  imports: [RecipeDbModule],
})
export class RecipesModule {}
