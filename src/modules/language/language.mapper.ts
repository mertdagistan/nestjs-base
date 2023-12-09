import { Mapper, createMap, forMember, ignore } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Language } from 'src/models/entities/language.entity';
import { LanguageListDto } from './dto/language.list.dto';
import { LanguageDto } from './dto/language.dto';

@Injectable()
export class LanguageMapperProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        Language,
        LanguageListDto,
        forMember((d) => d.status, ignore()),
      );
      createMap(
        mapper,
        Language,
        LanguageDto,
        forMember((d) => d.status, ignore()),
        // afterMap((d) => {
        //   d.translates = d?.translates?.filter((t) => t.status === EntityStatusEnum.ACTIVE);
        // }),
      );

      createMap(mapper, LanguageDto, Language);
    };
  }
}
