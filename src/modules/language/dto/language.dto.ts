import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/infrastructure/base/base.dto';

export class LanguageDto extends BaseDto {
  @ApiProperty({ required: true, example: 'Turkish' })
  @AutoMap()
  name: string;

  @AutoMap()
  @ApiProperty({ required: true, example: 'tr' })
  code: string;
}
