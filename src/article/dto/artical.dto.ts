import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: '文章标题' })
  @IsNotEmpty({ message: '文章标题必填' })
  readonly title: string;

  @ApiProperty({ description: '作者' })
  @IsNotEmpty({ message: '缺少作者信息' })
  readonly author: string;

  @ApiPropertyOptional({ description: '内容' })
  readonly content: string;
  @ApiPropertyOptional({ description: '封面' })
  readonly img_url: string;

  // @IsNumber()
  @ApiProperty({ description: '文章类型' })
  readonly type: number;

  @ApiProperty({ description: '文章类型' })
  readonly is_show: boolean;
}
