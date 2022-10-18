import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { HttpExceptionFilter } from './core/filter/http-exception.filter'; //失败拦截
import { TransformInterceptor } from './core/interceptor/transform.interceptor'; //成功拦截器

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); // 设置全局路由前缀

  // 注册全局错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 成功拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 全局使用管道
  app.useGlobalPipes(new ValidationPipe());

  // swagger 配置  注意在路由前缀后
  const config = new DocumentBuilder()
    .setTitle('鸭鸭饼饼株式会社管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // 开启跨域
  app.enableCors();
  // 启动服务器
  await app.listen(8717, () => {
    console.log(
      '启动了启动了，快去8717端口看看吧' + ' http://localhost:8717/api',
    );
    console.log('接口文档' + ' http://localhost:8717/docs');
  });
}
bootstrap();
