// 全局 成功拦截器
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log('拦截器生效');
    // console.log(context);

    return next.handle().pipe(
      map((data) => {
        console.log('map', data);

        return {
          data,
          code: 1,
          msg: '请求成功',
          succes: true,
        };
      }),
    );
  }
}
