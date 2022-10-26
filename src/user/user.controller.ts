import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @ApiTags('用户/注册')
  @ApiOperation({ summary: '注册新用户' })
  @ApiResponse({ status: 201 })
  @HttpCode(200)
  @Post('register')
  async addFood(@Body() data: CreateUserDto) {
    return await this.UserService.register(data);
  }
}
