import { SetMetadata } from '@nestjs/common';
import { UserTypeEnum } from '../enums/user.type.enum';

export const UserTypes = (...user_types: UserTypeEnum[]) => SetMetadata('user_types', user_types);
