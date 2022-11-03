import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStorage } from '../auth/local.strategy';

import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule],
  controllers: [UserController],
  providers: [UserService, LocalStorage],
  // providers: [UserService],

  exports: [UserService, UserModule],
})
export class UserModule {}
