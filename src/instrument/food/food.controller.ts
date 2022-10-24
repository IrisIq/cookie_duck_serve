import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { FoodService } from './food.service';
import { Food } from './dto/food.dto';

@Controller('/instrument/food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  // 添加一种食物
  @ApiTags('工具/食物')
  @ApiOperation({ summary: '添加食物' })
  @Post()
  async addFood(@Body() data: Food) {
    console.log(data);

    return await this.foodService.addFood(data);
  }
}
