import { Controller, Get, Param, ParseUUIDPipe, Req } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller({
  path: 'recipes',
  version: '1',
})
export class RecipesController {
  constructor(private recipeService: RecipesService) {}

  @Get(':uuid')
  async getOne(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<any> {
    return this.recipeService.getOneByUuid(uuid);
  }

  @Get()
  async getAll(@Req() req): Promise<any> {
    return this.recipeService.getAll(req.query);
  }
}
