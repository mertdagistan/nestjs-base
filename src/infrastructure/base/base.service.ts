import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { BaseEntity } from 'src/models/entities/base.entity';
import { applyAutoWhere } from 'src/utils/entity.helper';
import { Repository } from 'typeorm';
import { PageDto } from '../models/page.dto';
import { PageMetaDto } from '../models/page.meta.dto';
import { ResException } from '../models/res.exception';
import { BaseDto } from './base.dto';
import { BaseFilterDto } from './base.filter.dto';

@Injectable()
export class BaserService<
  TModel extends BaseEntity,
  TListDto extends BaseDto,
  TFilterDto extends BaseFilterDto,
  TDto extends BaseDto,
> {
  private modelType: new () => TModel;
  private listDtoType: new () => TListDto;
  private dtoType: new () => TDto;

  constructor(
    private readonly _repository: Repository<TModel>,
    @InjectMapper() private mapper: Mapper,
    private readonly table: string,
    modelType: new () => TModel,
    listDtoType: new () => TListDto,
    dtoType: new () => TDto,
  ) {
    this.modelType = modelType;
    this.listDtoType = listDtoType;
    this.dtoType = dtoType;
  }

  async _findAll(filterDto: TFilterDto): Promise<PageDto<TListDto>> {
    try {
      const query = this._repository.createQueryBuilder(this.table);
      query.orderBy(`${this.table}.id`, filterDto.order).skip(filterDto.skip).take(filterDto.take);
      await applyAutoWhere(this.table, this.modelType, query, filterDto);
      const itemCount = await query.getCount();
      const { entities } = await query.getRawAndEntities();
      const data = await this.mapper.mapArrayAsync(entities, this.modelType, this.listDtoType);
      const pageMetaDto = new PageMetaDto({ itemCount, filterDto });

      return new PageDto(data, pageMetaDto);
    } catch (error) {
      console.log('error', error);
      throw new ResException(error).internalServerError();
    }
  }

  async _findOne(id: any): Promise<TDto> {
    const entity = await this._repository.findOne({
      where: { id },
    });
    console.log('entity', entity);
    return this.mapper.map(entity, this.modelType, this.dtoType);
  }

  async _create(dto: TDto): Promise<TDto> {
    const entity = this.mapper.map(dto, this.dtoType, this.modelType);
    const result = await this._repository.save(entity);
    return this.mapper.map(result, this.modelType, this.dtoType);
  }

  async _update(dto: TDto): Promise<TDto> {
    const entity = this.mapper.map(dto, this.dtoType, this.modelType);
    const result = await this._repository.save(entity);
    return this.mapper.map(result, this.modelType, this.dtoType);
  }
}
