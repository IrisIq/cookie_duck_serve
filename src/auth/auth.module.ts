import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { LocalStorage } from './local.strategy';
import { JwtStorage } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';

const jwtModule = JwtModule.registerAsync({
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      secret: configService.get('SECRET', 'Cookie&DuckCompany'),
      signOptions: { expiresIn: '4h' },
    };
  },
});

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule],
  providers: [AuthService, LocalStorage, JwtStorage],
  exports: [LocalStorage],
})
export class AuthModule {}
