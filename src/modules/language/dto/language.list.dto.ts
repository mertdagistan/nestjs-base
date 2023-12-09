import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/infrastructure/base/base.dto';

export class LanguageListDto extends BaseDto {
  @ApiProperty()
  @AutoMap()
  name: string;

  @AutoMap()
  @ApiProperty()
  code: string;
}
