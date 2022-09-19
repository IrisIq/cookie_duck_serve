import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 启动服务器
  await app.listen(8717,()=>{
    console.log('启动了启动了，快去8717端口看看吧' + ' http://localhost:8717/')
  } );
}
bootstrap();
