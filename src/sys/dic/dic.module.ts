import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DicService } from './dic.service';
import { DicController } from './dic.controller';
import { DictTypeEntity } from './entities/dic.type.entity';
import { DictItemEntity } from './entities/dic.item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DictTypeEntity, DictItemEntity])],
  controllers: [DicController],
  providers: [DicService],
})
export class DicModule {}
