import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateDicTypeDto } from './dto/create-dic.dto';
import { UpdateDicDto } from './dto/update-dic.dto';
import { DictTypeEntity } from './entities/dic.type.entity';

@Injectable()
export class DicService {
  constructor(
    @InjectRepository(DictTypeEntity)
    private readonly dictTypeEntity: Repository<DictTypeEntity>,
  ) {}

  async createDicType(dic: Partial<CreateDicTypeDto>) {
    console.log(dic);
    // console.log(this.dictTypeEntity);

    return this.dictTypeEntity.save(dic);
  }

  findAll() {
    return `This action returns all dic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dic`;
  }

  update(id: number, updateDicDto: UpdateDicDto) {
    return `This action updates a #${id} dic`;
  }

  remove(id: number) {
    return `This action removes a #${id} dic`;
  }
}
