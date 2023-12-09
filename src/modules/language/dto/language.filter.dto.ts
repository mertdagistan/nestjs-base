import { IsOptional } from 'class-validator';
import { BaseFilterDto } from 'src/infrastructure/base/base.filter.dto';

export class LanguageFilterDto extends BaseFilterDto {
  @IsOptional()
  code: string;

  @IsOptional()
  name: string;
}
