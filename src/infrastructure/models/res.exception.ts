import { HttpException, HttpStatus } from '@nestjs/common';
export class ResException extends HttpException {
  constructor(code?: HttpStatus, message?: string, technicalMessage?: string) {
    super(
      {
        code,
        data: null,
        status: 2,
        message: message,
      },
      code,
    );

    console.log('ResTechnicalMessage =======> ', technicalMessage);
    console.log('ResException =======> ', message);
  }

  internalServerError(tech?: string, message?: string) {
    return new ResException(HttpStatus.INTERNAL_SERVER_ERROR, message || 'error.internal_server_error', tech);
  }

  badRequest(tech?: string, message?: string) {
    return new ResException(HttpStatus.BAD_REQUEST, message || 'error.bad_request', tech);
  }

  notFound(tech?: string, message?: string) {
    return new ResException(HttpStatus.NOT_FOUND, message || 'error.not_found', tech);
  }

  forbidden(tech?: string, message?: string) {
    return new ResException(HttpStatus.FORBIDDEN, message || 'error.forbidden', tech);
  }

  unauthorized(tech?: string, message?: string) {
    return new ResException(HttpStatus.UNAUTHORIZED, message || 'error.unauthorized', tech);
  }

  conflict(tech?: string, message?: string) {
    return new ResException(HttpStatus.CONFLICT, message || 'error.conflict', tech);
  }

  unprocessableEntity(tech?: string, message?: string) {
    return new ResException(HttpStatus.UNPROCESSABLE_ENTITY, message || 'error.unprocessable_entity', tech);
  }

  alredyExist(tech?: string, message?: string) {
    return new ResException(HttpStatus.CONFLICT, message || 'error.already_exist', tech);
  }
}
