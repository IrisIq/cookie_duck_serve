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
  Header,
  HttpException,
  HttpStatus,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { GetDataDto, PostDataDto } from './dto/hello.dto';
import { HelloService } from './hello.service';

@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // get请求
  @Get('')
  fetch(@Query() params: GetDataDto, @Headers('token') token): string {
    if (params.key) {
      return this.helloService.getHello(params.key);
    }
    // throw new HttpException('你没有传key', 999);
    throw new HttpException(
      {
        status: 999,
        error: 'This is a custom message',
        outher: '草泥马，不知道传key吗杀千刀的',
      },
      405,
    );
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
  fetchh(@Query() params: GetDataDto, @Headers('token') token: string): string {
    console.log(token);
    console.log(params);
    return this.helloService.getHello(params.key);
  }
}
