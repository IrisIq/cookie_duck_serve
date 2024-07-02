/*
 * @Author: IrisIq
 * @Date: 2022-12-05 17:41:11
 * @LastEditors: IrisIq
 * @LastEditTime: 2024-06-07 15:26:57
 * @Description: content
 */
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DicService } from './dic.service';
import { CreateDicTypeDto, CreateDicItemDto } from './dto/create-dic.dto';
// import { UpdateDicDto } from './dto/update-dic.dto';

@ApiTags('系统/字典')
@Controller('sys/dic')
export class DicController {
  constructor(private readonly dicService: DicService) {}

  @Post('creatType')
  @HttpCode(200)
  createDicType(@Body() createDicTypeDto: CreateDicTypeDto) {
    return this.dicService.createDicType(createDicTypeDto);
  }
  @Post('creatItem')
  @HttpCode(200)
  createDicItem(@Body() createDicItemDto: CreateDicItemDto) {
    return this.dicService.createDicItem(createDicItemDto);
  }
}
