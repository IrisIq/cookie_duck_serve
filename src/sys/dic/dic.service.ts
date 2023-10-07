import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDicTypeDto, CreateDicItemDto } from './dto/create-dic.dto';
// import { UpdateDicDto } from './dto/update-dic.dto';
import { DictTypeEntity } from './entities/dic.type.entity';
import { DictItemEntity } from './entities/dic.item.entity';

@Injectable()
export class DicService {
  constructor(
    @InjectRepository(DictTypeEntity)
    private readonly dictTypeEntity: Repository<DictTypeEntity>,
    @InjectRepository(DictItemEntity)
    private readonly dicItemEntity: Repository<DictItemEntity>,
  ) {}

  // 创建字典
  async createDicType(dic: Partial<CreateDicTypeDto>) {
    console.log(dic);
    return this.dictTypeEntity.save(dic);
  }

  // 创建字典 内容
  async createDicItem(dic: Partial<CreateDicItemDto>) {
    console.log(dic);
    return this.dicItemEntity.save(dic);
  }
}
