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
  async addFood(post) {
    console.log(post);
    console.log(this.FoodRepository);

    return this.FoodRepository.save(post);
  }
}
