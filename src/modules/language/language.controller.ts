import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageDto } from 'src/infrastructure/models/page.dto';
import { LanguageFilterDto } from './dto/language.filter.dto';
import { LanguageListDto } from './dto/language.list.dto';
import { LanguageService } from './language.service';
import { LanguageDto } from './dto/language.dto';

@Controller('language')
@ApiTags('Language')
export class LanguageController {
  constructor(private readonly _service: LanguageService) {}

  @Get('findAll')
  @HttpCode(HttpStatus.OK)
  async getLanguages(@Query() filterDto: LanguageFilterDto): Promise<PageDto<LanguageListDto>> {
    return await this._service._findAll(filterDto);
  }

  @Get('findOne')
  @HttpCode(HttpStatus.OK)
  async getLanguage(@Query('id') id: number): Promise<LanguageDto> {
    return await this._service._findOne(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createLanguage(@Body() dto: LanguageDto): Promise<LanguageDto> {
    return await this._service._create(dto);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  async updateLanguage(@Body() dto: LanguageDto): Promise<LanguageDto> {
    return await this._service._update(dto);
  }
}
