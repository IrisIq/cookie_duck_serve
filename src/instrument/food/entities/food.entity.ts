import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('foods')
export class FoodEntity {
  //'uuid'
  @PrimaryGeneratedColumn()
  food_id: number;

  @Column({ type: 'tinyint', default: 0, comment: '分类:0 未分类 ' })
  food_type: number; // 食物分类

  @Column({ length: 60, comment: '名称' })
  food_name: string; // 食物名称

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '热量' })
  food_heat: number; // 热量

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '蛋白质' })
  food_protein: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '脂肪' })
  food_fat: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, comment: '碳水' })
  food_carbohydrate: number;

  @Column({
    type: 'double',
    default: '100',
    precision: 10,
    scale: 2,
    comment: '每份重量',
  })
  food_weight: number;

  @Column({ type: 'text', nullable: true, comment: '图片' })
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
