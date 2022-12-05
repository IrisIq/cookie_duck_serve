import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStorage } from '../auth/local.strategy';

import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService, LocalStorage, AuthService],
  // 需要引入AuthService？？？不明

  exports: [UserService, UserModule],
})
export class UserModule {}
