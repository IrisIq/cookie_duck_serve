import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '用户名必填' })
  username: string; // 用户名

  @ApiProperty({ description: '昵称' })
  nickname: string; //昵称

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码必填' })
  password: string; // 密码

  @ApiProperty({ description: '邮箱' })
  @IsNotEmpty({ message: '邮箱必填' })
  email: string;

  @ApiProperty({ description: '用户名' })
  role: string; // 用户角色
}
