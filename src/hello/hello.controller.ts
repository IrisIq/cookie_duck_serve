import {
  Controller,
  Get,
  Query,
  Headers,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  Header
} from '@nestjs/common';
import { GetDataDto, PostDataDto } from './dto/hello.dto';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // get请求
  @Get('')
  fetch(@Query() params: GetDataDto, @Headers('token') token): string {
    // console.log(token);
    console.log(params)
    return this.helloService.getHello(params.key);
  }

  // post请求
  @Post()
  save(@Body() data: PostDataDto) {
    return this.helloService.postHello(data);
  }

  // put请求
  @Put(':id')
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.updateHello(id, message);
  }

  // delete请求
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.removeHello(id);
  }

  @Get('hi')
  @HttpCode(203)
  @Header('Cache-Control', 'none')
  fetchh(@Query() params: GetDataDto, @Headers('token') token:string): string {
    console.log(token);
    console.log(params)
    return this.helloService.getHello(params.key);
  }
}
