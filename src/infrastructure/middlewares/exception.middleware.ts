import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status_code = exception.getStatus();
    const message = exception.message || null;
    let request_body;

    if (request.body) request_body = request.body;
    else if (request.params) request_body = request.params;
    else request_body = null;

    const body = {
      status_code,
      message,
      timestamp: new Date().toISOString(),
      endpoint: request.url,
      body: request_body,
    };

    this.logger.warn(`${status_code} ${message}`);

    response.status(status_code).json(body);
  }
}
