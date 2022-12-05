import { Module, forwardRef } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { LocalStorage } from './local.strategy';
import { JwtStorage } from './jwt.strategy';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { UserModule } from './../user/user.module';

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
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    jwtModule,
    forwardRef(() => UserModule),
  ],
  providers: [AuthService, LocalStorage, JwtStorage],
  exports: [AuthModule, jwtModule],
})
export class AuthModule {
  // constructor(private readonly authService: AuthService) {}
}
