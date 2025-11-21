import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    const headers = new Headers();

    headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.set(
      'Access-Control-Allow-Methods',
      'GET,POST,PATCH,PUT,DELETE,OPTIONS,HEAD',
    );
    headers.set('Access-Control-Allow-Credentials', 'false');

    res.setHeaders(headers);

    next();
  }
}
