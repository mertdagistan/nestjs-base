import { AutoMap } from '@automapper/classes';
import { EntityStatusEnum } from '../enums/entity.status.enum';

export class BaseDto {
  @AutoMap()
  id: number;

  created_by!: number;

  created_at!: Date;

  updated_at!: Date;

  deleted_at!: Date;

  @AutoMap()
  status: EntityStatusEnum;
}
