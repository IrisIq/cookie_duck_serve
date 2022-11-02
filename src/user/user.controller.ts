import {
  Req,
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { CreateUserDto, LoginrDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @ApiTags('用户/注册')
  @ApiOperation({ summary: '注册新用户' })
  @ApiResponse({ status: 200 })
  @HttpCode(200)
  @Post('register')
  async register(@Body() data: CreateUserDto) {
    return await this.UserService.register(data);
  }

  @ApiTags('用户/登陆')
  @ApiOperation({ summary: '登陆账号' })
  @UseGuards(AuthGuard('local'))
  @UseInterceptors(ClassSerializerInterceptor)
  @HttpCode(200)
  @Post('login')
  async login(@Body() account: LoginrDto, @Req() req) {
    // 这个端口 先走 local验证 在进入这里，然后进入 服务
    // console.log(3, req);
    // console.log(req);
    console.log(account);

    return await this.UserService.login(req.user);
  }
}
