/*
 * @Author: IrisIq
 * @Date: 2022-09-21 10:27:11
 * @LastEditors: IrisIq
 * @LastEditTime: 2024-05-30 17:23:54
 * @Description: content
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { FoodEntity } from './entities/food.entity';
import { FoodTypeEntity } from './entities/type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoodEntity, FoodTypeEntity])],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
