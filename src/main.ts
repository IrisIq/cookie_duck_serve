import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception.filter'; //失败拦截
import { TransformInterceptor } from './core/interceptor/transform.interceptor'; //成功拦截器

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀

  // 注册全局错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 成功拦截器
  // app.useGlobalFilters(new TransformInterceptor());

  // 启动服务器
  await app.listen(8717, () => {
    console.log('启动了启动了，快去8717端口看看吧' + ' http://localhost:8717/');
  });
}
bootstrap();
