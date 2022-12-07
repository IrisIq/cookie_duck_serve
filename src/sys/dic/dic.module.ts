import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DicService } from './dic.service';
import { DicController } from './dic.controller';
import { DictTypeEntity } from './entities/dic.type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DictTypeEntity])],
  controllers: [DicController],
  providers: [DicService],
})
export class DicModule {}
