import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDtoParameters } from './page.meta.parameters.dto';

export class PageMetaDto {
  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly take: number;

  @ApiProperty()
  readonly item_count: number;

  @ApiProperty()
  readonly page_count: number;

  @ApiProperty()
  readonly has_previous_page: boolean;

  @ApiProperty()
  readonly has_next_page: boolean;

  constructor({ filterDto, itemCount }: PageMetaDtoParameters) {
    this.page = filterDto.page;
    this.take = filterDto.take;
    this.item_count = itemCount;
    this.page_count = Math.ceil(this.item_count / this.take);
    this.has_previous_page = this.page > 1;
    this.has_next_page = this.page < this.page_count;
  }
}
