import { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaserService } from 'src/infrastructure/base/base.service';
import { Language } from 'src/models/entities/language.entity';
import { Repository } from 'typeorm';
import { LanguageDto } from './dto/language.dto';
import { LanguageFilterDto } from './dto/language.filter.dto';
import { LanguageListDto } from './dto/language.list.dto';

@Injectable()
export class LanguageService extends BaserService<Language, LanguageListDto, LanguageFilterDto, LanguageDto> {
  // constructor(
  //   @InjectRepository(Language) private readonly repository: Repository<Language>,
  //   @InjectMapper() private readonly mapper: Mapper,
  // ) {}
  constructor(
    @InjectRepository(Language)
    private repository: Repository<Language>,
    mapper: Mapper,
  ) {
    super(repository, mapper, 'language', Language, LanguageListDto, LanguageDto);
  }

  // async findAll(filterDto: LanguageFilterDto): Promise<PageDto<LanguageListDto>> {
  //   try {
  //     const query = this.repository.createQueryBuilder('language');
  //     query.orderBy('language.id', filterDto.order).skip(filterDto.skip).take(filterDto.take);
  //     await applyAutoWhere('language', Language, filterDto, query);
  //     const itemCount = await query.getCount();
  //     const { entities } = await query.getRawAndEntities();
  //     const data = await this.mapper.mapArrayAsync(entities, Language, LanguageListDto);
  //     const pageMetaDto = new PageMetaDto({ itemCount, filterDto });

  //     return new PageDto(data, pageMetaDto);
  //   } catch (error) {}
  // }

  // async findOne(id: number): Promise<LanguageDto> {
  //   const entity = await this.repository.findOne({
  //     where: { id },
  //   });
  //   return this.mapper.map(entity, Language, LanguageDto);
  // }

  // async create(dto: LanguageDto): Promise<LanguageDto> {
  //   const entity = this.mapper.map(dto, Language, LanguageDto);
  //   const result = await this.repository.save(entity);
  //   return this.mapper.map(result, Language, LanguageDto);
  // }

  // async update(id: number, dto: LanguageDto): Promise<LanguageDto> {
  //   const entity = this.mapper.map(dto, Language, LanguageDto);
  //   const result = await this.repository.update(id, entity);
  //   return this.mapper.map(result, Language, LanguageDto);
  // }
}
