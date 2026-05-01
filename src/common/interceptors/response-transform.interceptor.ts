import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SKIP_WRAP_KEY } from '../decorators/skip-wrap.decorator';

@Injectable()
export class ResponseTransformInterceptor<T>
  implements NestInterceptor<T, any>
{
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const skipWrap = this.reflector.getAllAndOverride<boolean>(SKIP_WRAP_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (skipWrap) {
      return next.handle();
    }

    return next.handle().pipe(
      map((response) => {
        // Handle case where service might already return a message
        const message = response?.message || 'Operation successful';
        const data = response?.data !== undefined ? response.data : response;

        // If response is already in the right format, don't double wrap
        if (response && response.message && response.data) {
           return response;
        }

        return {
          message,
          data,
        };
      }),
    );
  }
}
