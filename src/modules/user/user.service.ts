import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async getById(id: number): Promise<UserDto> {
    const user = await this.userRepository.findOneBy({ id: id });
    return await this.mapper.mapAsync(user, User, UserDto);
  }
}
