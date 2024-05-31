/*
 * @Author: IrisIq
 * @Date: 2022-09-27 17:02:14
 * @LastEditors: IrisIq
 * @LastEditTime: 2024-05-31 15:46:40
 * @Description: content
 */
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
import { FoodTypeEntity } from './instrument/food/entities/type.entity';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from 'src/user/entities/user.entity';
import { DicModule } from './sys/dic/dic.module';
import { DictTypeEntity } from './sys/dic/entities/dic.type.entity';
import { DictItemEntity } from './sys/dic/entities/dic.item.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [envConfig.path],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get('NODE_ENV'), 111111);
        return {
          type: 'mysql',
          host: configService.get('DB_HOST', 'localhost'),
          port: configService.get<number>('DB_PORT', 3306),
          username: configService.get('DB_USER', 'root'),
          password: configService.get('DB_PASSWORD', '123456789'),
          database: configService.get('DB_DATABASE', 'cookieDuck'),
          entities: [
            ArticlEntity,
            FoodEntity,
            UserEntity,
            DictTypeEntity,
            DictItemEntity,
            FoodTypeEntity,
          ],
          timezone: '+08:00', //服务器上配置的时区
          synchronize: configService.get('NODE_ENV') === 'dev', //根据实体自动创建数据库表， 生产环境建议关闭
        };
      },
    }),
    UserModule,
    FoodModule,
    ArticleModule,
    AuthModule,
    DicModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
