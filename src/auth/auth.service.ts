import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

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

  async getUser(user) {
    return await this.userService.findOne(user.id);
  }
}
