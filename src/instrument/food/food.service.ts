/*
 * @Author: IrisIq
 * @Date: 2022-09-21 10:53:46
 * @LastEditors: IrisIq
 * @LastEditTime: 2024-05-31 16:21:17
 * @Description: content
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { FoodEntity } from './entities/food.entity';
import { FoodTypeEntity } from './entities/type.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(FoodEntity)
    private readonly FoodRepository: Repository<FoodEntity>,
    @InjectRepository(FoodTypeEntity)
    private readonly FoodTypeEntity: Repository<FoodTypeEntity>,
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

  // 获取食物分类
  async getFoodType() {
    const type = await this.FoodTypeEntity.createQueryBuilder().getMany();
    console.log(type);
    return type;
  }
}
