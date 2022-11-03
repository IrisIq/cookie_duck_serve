import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtStorage } from './jwt.strategy';

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private userService: UserService,
  ) {}

  // 生成token
  // createToken(user: Partial<UserEntity>) {
  //   return this.userRepository.sign(user);
  // }

  async getUser(user) {
    return await this.userService.getUser(user.id);
  }
}
