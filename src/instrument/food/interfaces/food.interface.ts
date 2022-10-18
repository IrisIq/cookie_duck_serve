import { FoodEntity } from '../entities/food.entity';

export interface FoodRo {
  list: FoodEntity[];
  count: number;
}
