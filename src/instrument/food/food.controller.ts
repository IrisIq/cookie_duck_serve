import { Controller, Post, Body } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('/instrument/food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  // 添加一种食物
  @Post()
  async add(@Body() data) {
    console.log(data);

    return await this.foodService.addFood(data);
  }
}
