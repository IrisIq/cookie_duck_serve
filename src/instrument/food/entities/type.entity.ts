/*
 * @Author: IrisIq
 * @Date: 2024-05-30 17:13:24
 * @LastEditors: IrisIq
 * @Description: content
 * @LastEditTime: 2024-06-11 10:42:37
 */
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { FoodEntity } from './food.entity';
@Entity('food_type')
export class FoodTypeEntity {
  //'uuid'
  //   @OneToOne(() => FoodEntity)
  @PrimaryGeneratedColumn()
  food_type_id: number;

  @Column({ length: 60, comment: '名称' })
  food_name: string; // 食物名称
}
