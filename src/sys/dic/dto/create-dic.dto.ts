import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

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

export class CreateDicItemDto {
  @ApiProperty({ description: '所属字典id' })
  @IsNotEmpty({ message: '字典名称必填' })
  dicId: number;

  @ApiProperty({ description: '字典 键' })
  @IsNotEmpty({ message: '字典键必填' })
  dicKey: string;

  @ApiProperty({ description: '字典值' })
  @IsNotEmpty({ message: '字典值必填' })
  dicValue: string;

  @ApiProperty({ description: '顺序' })
  dicSort: number;

  @ApiProperty({ description: '状态' })
  status: number;

  @ApiProperty({ description: '备注' })
  remark: string;
}
