import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Food {
  @ApiProperty({ description: '食物分类' })
  food_type: number; // 食物分类

  @ApiProperty({ description: '食物名称' })
  @IsNotEmpty({ message: '食物名称必填' })
  food_name: string; // 食物名称

  @ApiProperty({ description: '热量' })
  @IsNotEmpty({ message: '热量必填' })
  food_heat: number; // 热量

  @IsNotEmpty({ message: '蛋白质必填' })
  @ApiProperty({ description: '蛋白质' })
  food_protein: number;

  @IsNotEmpty({ message: '脂肪必填' })
  @ApiProperty({ description: '脂肪' })
  food_fat: number; //脂肪

  @IsNotEmpty({ message: '碳水必填' })
  @ApiProperty({ description: '碳水' })
  food_carbohydrate: number; // 碳水

  @ApiProperty({ description: '每份重量' })
  food_weight: number;

  @ApiProperty({ description: '图片地址' })
  food_img: string;
}
