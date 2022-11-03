import { UserEntity } from './entities/user.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, LoginrDto } from './dto/user.dto';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  // 注册
  async register(createUser: CreateUserDto) {
    const { username, email, password } = createUser;

    const existUser = await this.userRepository.findOne({
      where: { username },
    });
    if (existUser) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const existEmail = await this.userRepository.findOne({
      where: { email },
    });

    if (existEmail) {
      throw new HttpException('邮箱注册已经被注册', 401);
    }

    // 加密
    createUser.password = await bcrypt.hashSync(password, 10);

    await this.userRepository.save(createUser);
    return await this.userRepository.findOne({ where: { username } });
  }

  // 登陆
  async login(account: Partial<UserEntity>) {
    // console.log(1, account);
    return account;
  }

  async getUser(id) {
    return '这里是auth服务引用的';
  }
}
