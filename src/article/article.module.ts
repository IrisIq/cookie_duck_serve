import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticlEntity } from './article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticlEntity])],

  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
