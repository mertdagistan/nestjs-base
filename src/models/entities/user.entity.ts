import { AutoMap } from '@automapper/classes';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Language } from './language.entity';
import { UserTypeEnum } from 'src/infrastructure/enums/user.type.enum';
import { EntityFilter } from 'src/infrastructure/decorator/entity.filter.decorator';

@Entity('users')
export class User extends BaseEntity {
  @EntityFilter
  @AutoMap()
  @Column({ type: 'varchar', length: 255, nullable: true })
  first_name: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 255, nullable: true })
  last_name: string;

  @AutoMap()
  @Column({ type: 'enum', enum: UserTypeEnum, default: UserTypeEnum.GUEST })
  user_type: UserTypeEnum;

  @Column({ nullable: true })
  language_id: number;

  @Column({ nullable: true })
  app_id: string;

  @ManyToOne(() => Language)
  @JoinColumn()
  language: Language;
}
