import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { User } from 'src/models/entities/user.entity';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers?.authorization?.replace('Bearer ', '');
    if (token) {
      const tempUser = this.jwtService.decode(token) as User;
      if (tempUser?.id > 0) {
        const user = await this.userService.getById(tempUser?.id);
        if (user) {
          req['user'] = user;
          req['user_status'] = user?.status;
          req['user_type'] = user?.user_type;
        }
      }
    }
    next();
  }
}
