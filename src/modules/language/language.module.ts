import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { Language } from 'src/models/entities/language.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageMapperProfile } from './language.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  controllers: [LanguageController],
  providers: [LanguageService, LanguageMapperProfile],
})
export class LanguageModule {}
