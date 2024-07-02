import { Controller, Post, Body, HttpCode, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { FoodService } from './food.service';
import { Food } from './dto/food.dto';

@Controller('/instrument/food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  // 添加一种食物
  @ApiTags('工具/食物')
  @ApiOperation({ summary: '添加食物' })
  @HttpCode(200)
  @Post()
  async addFood(@Body() data: Food) {
    return await this.foodService.addFood(data);
  }

  // 获取 食物
  @ApiTags('工具/食物')
  @ApiOperation({ summary: '获取食物' })
  @Get()
  async getFood(@Query() type) {
    return await this.foodService.getFood(type);
  }

  // 获取 食物
  @ApiTags('工具/食物')
  @ApiOperation({ summary: '获取食物分类' })
  @Get('getType')
  async getFoodType() {
    return await this.foodService.getFoodType();
  }
}
