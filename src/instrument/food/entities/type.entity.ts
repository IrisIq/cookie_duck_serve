/*
 * @Author: IrisIq
 * @Date: 2024-05-30 17:13:24
 * @LastEditors: IrisIq
 * @LastEditTime: 2024-05-31 16:19:22
 * @Description: content
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('foods_type')
export class FoodTypeEntity {
  //'uuid'
  @PrimaryGeneratedColumn()
  food_type_id: number;

  @Column({ length: 60, comment: '名称' })
  food_name: string; // 食物名称
}
