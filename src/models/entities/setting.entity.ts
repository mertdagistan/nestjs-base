import { AutoMap } from '@automapper/classes';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('settings')
export class Setting extends BaseEntity {
  @AutoMap()
  @Column({ type: 'varchar', length: 255, nullable: false })
  key: string;

  @AutoMap()
  @Column({ type: 'text', nullable: false })
  value: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 255, nullable: false })
  type: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 255, nullable: true })
  group: string;

  @AutoMap()
  @Column({ type: 'boolean', nullable: false, default: false })
  show: boolean;
}
