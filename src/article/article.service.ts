import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { ArticlEntity } from './article.entity';

export interface ArticleRo {
  list: ArticlEntity[];
  count: number;
}
@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticlEntity)
    private readonly articlesRepository: Repository<ArticlEntity>,
  ) {}

  // 创建文章
  async create(post: Partial<ArticlEntity>): Promise<ArticlEntity> {
    const { title } = post;
    console.log(post);

    if (!title) {
      throw new HttpException('缺少文章标题', 401);
    }
    const doc = await this.articlesRepository.findOne({ where: { title } });
    if (doc) {
      throw new HttpException('文章已存在', 401);
    }
    return await this.articlesRepository.save(post);
  }

  // 获取文章列表
  async findAll(query): Promise<ArticleRo> {
    console.log(query);
    const qb = await this.articlesRepository.createQueryBuilder('articl');

    qb.where('1 = 1');
    qb.orderBy('articl.create_time', 'DESC');

    const count = await qb.getCount();

    const { pageNum = 1, pageSize = 10 } = query;
    qb.limit(pageSize);
    qb.offset(pageSize * (pageNum - 1));

    const posts = await qb.getMany();
    // console.log(posts);

    return { list: posts, count: count };
  }

  // 获取指定文章
  async findById(id): Promise<ArticlEntity> {
    return await this.articlesRepository.findOne({
      where: {
        id,
      },
      order: {
        id: 'DESC',
      },
    });
  }

  // 更新文章
  async updateById(id, post): Promise<any> {
    const existPost = await this.articlesRepository
      .createQueryBuilder()
      .update()
      .set(post)
      .where('id = :id', { id })
      .execute();
    console.log(existPost);

    // const existPost = await this.articlesRepository.findOne(id);
    // if (!existPost) {
    //   throw new HttpException(`id为${id}的文章不存在`, 401);
    // }
    // const updatePost = this.articlesRepository.merge(existPost, post);
    // this.articlesRepository.save(updatePost);
    // const data = await this.articlesRepository;

    return existPost;
  }

  // 刪除文章
  async remove(id) {
    const existPost = await this.articlesRepository.findOne(id);
    if (!existPost) {
      throw new HttpException(`id为${id}的文章不存在`, 401);
    }
    return await this.articlesRepository.remove(existPost);
  }
}
