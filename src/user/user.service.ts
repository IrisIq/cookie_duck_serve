import { UserEntity } from './entities/user.entity';
import {
  Injectable,
  HttpException,
  HttpStatus,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, LoginrDto } from './dto/user.dto';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  // 注册  完成
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
    const token = this.authService.createToken({
      id: account.id,
      username: account.username,
      role: account.role,
    });
    console.log(token);

    return { token };
  }

  // 查询id 用户
  async findOne(id) {
    console.log(id);
    // const user = await this.userRepository.findOne(id);
    const users = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id=:id', { id })
      .getOne();

    // console.log(users);
    return users;
  }
}
