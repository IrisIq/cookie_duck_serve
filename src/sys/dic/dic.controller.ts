import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { DicService } from './dic.service';
import { CreateDicTypeDto } from './dto/create-dic.dto';
import { UpdateDicDto } from './dto/update-dic.dto';

@ApiTags('系统/字典')
@Controller('sys/dic')
export class DicController {
  constructor(private readonly dicService: DicService) {}

  @Post('creatType')
  @HttpCode(200)
  createDicType(@Body() createDicTypeDto: CreateDicTypeDto) {
    console.log(createDicTypeDto);

    return this.dicService.createDicType(createDicTypeDto);
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
