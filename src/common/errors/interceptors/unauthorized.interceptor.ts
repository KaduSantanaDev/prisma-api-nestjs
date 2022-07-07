import { UnauthorizedError } from './../types/UnauthorizedError';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class UnauthorizedInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError(error => {
        if (error instanceof UnauthorizedError) {
          throw new UnauthorizedException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
