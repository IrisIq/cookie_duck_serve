import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDicTypeDto {
  @ApiProperty({ description: '字典名称' })
  @IsNotEmpty({ message: '字典名称必填' })
  dicName: string;

  @ApiProperty({ description: '字典编号' })
  @IsNotEmpty({ message: '字典编号必填' })
  dicNumbering: string;

  @ApiProperty({ description: '备注' })
  remark: string;
}
