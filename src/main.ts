import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 启动服务器
  await app.listen(3000,()=>{
    console.log('启动了启动了，快去3000端口看看吧' + ' http://localhost:3000/')
  } );
}
bootstrap();
