import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
// 配置文件
import envConfig from '../config/env';
// 模块
import { UserModule } from './user/user.module';
import { FoodModule } from './instrument/food/food.module';
import { ArticleModule } from './article/article.module';

import { ArticlEntity } from './article/article.entity';
import { FoodEntity } from './instrument/food/entities/food.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [envConfig.path],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get('DB_USER', 'root'),
        password: configService.get('DB_PASSWORD', '123456789'),
        database: configService.get('DB_DATABASE', 'cookieDuck'),
        entities: [ArticlEntity, FoodEntity],
        timezone: '+08:00', //服务器上配置的时区
        synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
      }),
    }),
    UserModule,
    FoodModule,
    ArticleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
