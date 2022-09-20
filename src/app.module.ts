import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestModule } from './diet-management-tools/nest/nest.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    HelloModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'cookieDuck',
      entities: [],
      synchronize: true,
    }),
    NestModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
