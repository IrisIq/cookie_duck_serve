import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('foods')
export class FoodEntity {
  @PrimaryGeneratedColumn('uuid')
  food_id: number;

  @Column()
  food_type: number; // 食物分类

  @Column()
  food_name: string; // 食物名称

  @Column()
  food_heat: string; // 热量

  @Column()
  food_protein: string; //蛋白质

  @Column()
  food_fat: string; //脂肪

  @Column()
  food_carbohydrate: string; // 碳水

  @Column({ type: 'double', default: '100' })
  food_weight: string; // 每份重量

  @Column({ type: 'text' }) //图片
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
