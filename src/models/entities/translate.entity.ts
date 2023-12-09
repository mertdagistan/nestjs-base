import { AutoMap } from '@automapper/classes';
import { BaseEntity } from './base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Language } from './language.entity';

@Entity('translates')
export class Translate extends BaseEntity {
  @AutoMap()
  @Column({ unique: true, nullable: false, length: 255 })
  key: string;

  @AutoMap()
  @Column({ type: 'text', nullable: false })
  value: string;

  @ManyToOne(() => Language, (language) => language.translates, {
    nullable: true,
  })
  @JoinColumn({ name: 'language_id' })
  @AutoMap()
  language: Language;
}
