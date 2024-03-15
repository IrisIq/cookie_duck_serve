import { ArticleService, ArticleRo } from './article.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePostDto } from './dto/artical.dto';

@Controller('/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  /**
   * 创建文章
   * @param post
   */
  @ApiTags('文章')
  @ApiOperation({ summary: '创建文章' })
  @HttpCode(200)
  @Post()
  async create(@Body() post: CreatePostDto) {
    console.log(post);
    return await this.articleService.create(post);
  }

  /**
   * 获取所有文章
   */

  @ApiTags('文章')
  @ApiOperation({ summary: '获取所有文章' })
  @Get()
  async findAll(@Query() query): Promise<ArticleRo> {
    console.log(query);

    return await this.articleService.findAll(query);
  }

  /**
   * 获取指定文章
   * @param id
   */
  @ApiTags('文章')
  @ApiOperation({ summary: '获取指定文章' })
  @Get('/:id')
  async findById(@Param('id') id) {
    console.log(id);
    const articleList = await this.articleService.findById(id);
    // console.log(res);
    articleList.is_show = articleList.is_show ? true : false;

    return articleList;
  }

  /**
   * 更新文章
   * @param id
   * @param post
   */
  @ApiTags('文章')
  @ApiOperation({ summary: '更新文章' })
  @Put('/:id')
  async update(@Param('id') id, @Body() post) {
    return await this.articleService.updateById(id, post);
  }

  /**
   * 删除
   * @param id
   */
  @ApiTags('文章')
  @ApiOperation({ summary: '删除文章' })
  @Delete('id')
  async remove(@Param('id') id) {
    return await this.articleService.remove(id);
  }
}
