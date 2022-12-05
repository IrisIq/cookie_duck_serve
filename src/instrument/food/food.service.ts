import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { FoodEntity } from './entities/food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(FoodEntity)
    private readonly FoodRepository: Repository<FoodEntity>,
  ) {}

  // 添加
  async addFood(post: Partial<FoodEntity>) {
    console.log(post);
    console.log(this.FoodRepository);

    return this.FoodRepository.save(post);
  }

  // 获取食物
  async getFood(type) {
    let foods = null;
    if (type.type) {
      foods = await this.FoodRepository.createQueryBuilder('foods')
        .where('foods.food_type=:type', type)
        .getMany();
    } else {
      foods = await this.FoodRepository.createQueryBuilder('foods').getMany();
    }
    console.log(foods);

    return foods;
  }
}
