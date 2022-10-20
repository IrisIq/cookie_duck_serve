import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('foods')
export class FoodEntity {
  //'uuid'
  @PrimaryGeneratedColumn()
  food_id: number;

  @Column({ type: 'tinyint', default: 0 })
  food_type: number; // 食物分类

  @Column({ length: 255 })
  food_name: string; // 食物名称

  @Column({ length: 255 })
  food_heat: string; // 热量

  @Column({ length: 255 })
  food_protein: string; //蛋白质

  @Column({ length: 255 })
  food_fat: string; //脂肪

  @Column({ length: 255 })
  food_carbohydrate: string; // 碳水

  @Column({ type: 'double', default: '100' })
  food_weight: string; // 每份重量

  @Column({ type: 'text', default: null }) //图片
  food_img: string;

  // @Column({
  //   name: 'create_time',
  //   type: 'timestamp',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // createTime: Date;

  // @Column({
  //   name: 'update_time',
  //   type: 'timestamp',
  //   default: () => 'CURRENT_TIMESTAMP',
  // })
  // updateTime: Date;
}
