import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Translate } from './translate.entity';
import { AutoMap } from '@automapper/classes';
import { EntityFilter } from 'src/infrastructure/decorator/entity.filter.decorator';

@Entity('languages')
export class Language extends BaseEntity {
  @EntityFilter
  @Column({ type: 'varchar', length: 10, nullable: false })
  @AutoMap()
  code: string;

  @EntityFilter
  @Column({ type: 'varchar', length: 255, nullable: false })
  @AutoMap()
  name: string;

  @AutoMap(() => [Translate])
  @OneToMany(() => Translate, (translate) => translate.language)
  translates: Translate[];
}
