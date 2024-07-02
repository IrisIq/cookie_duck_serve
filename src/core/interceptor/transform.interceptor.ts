/*
 * @Author: IrisIq
 * @Date: 2022-09-27 17:27:42
 * @LastEditors: IrisIq
 * @LastEditTime: 2024-06-07 15:27:31
 * @Description: content
 */
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
        return {
          data,
          code: 1,
          msg: '请求成功',
          success: true,
        };
      }),
    );
  }
}
