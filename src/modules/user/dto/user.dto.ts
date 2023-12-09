import { AutoMap } from '@automapper/classes';
import { BaseDto } from 'src/infrastructure/base/base.dto';
import { EntityStatusEnum } from 'src/infrastructure/enums/entity.status.enum';
import { UserTypeEnum } from 'src/infrastructure/enums/user.type.enum';
import { Language } from 'src/models/entities/language.entity';

export class UserDto extends BaseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  first_name: string;

  @AutoMap()
  last_name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  user_type: UserTypeEnum;

  @AutoMap()
  status: EntityStatusEnum;

  @AutoMap()
  Language: Language;
}
