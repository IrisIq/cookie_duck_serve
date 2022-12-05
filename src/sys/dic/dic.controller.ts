import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DicService } from './dic.service';
import { CreateDicDto } from './dto/create-dic.dto';
import { UpdateDicDto } from './dto/update-dic.dto';

@Controller('dic')
export class DicController {
  constructor(private readonly dicService: DicService) {}

  @Post()
  create(@Body() createDicDto: CreateDicDto) {
    return this.dicService.create(createDicDto);
  }

  @Get()
  findAll() {
    return this.dicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDicDto: UpdateDicDto) {
    return this.dicService.update(+id, updateDicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dicService.remove(+id);
  }
}
