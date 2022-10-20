import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { FoodService } from './food.service';

@Controller('/instrument/food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  // 添加一种食物
  @ApiTags('工具/食物')
  @ApiOperation({ summary: '创建文章' })
  @Post()
  async addFood(@Body() data) {
    console.log(data);

    return await this.foodService.addFood(data);
  }
}
