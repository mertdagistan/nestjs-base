import { AutoMap } from '@automapper/classes';
import { EntityStatusEnum } from 'src/infrastructure/enums/entity.status.enum';
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  // constructor(input: DeepPartial<any>) {
  //   if (input) {
  //     for (const [key, value] of Object.entries(input)) {
  //       this[key] = value;
  //     }
  //   }
  // }
  @AutoMap()
  @PrimaryColumn({ generated: 'identity', type: 'int' })
  id: number;

  @AutoMap()
  @Column({
    type: 'enum',
    enum: EntityStatusEnum,
    default: EntityStatusEnum.ACTIVE,
    name: 'status',
    enumName: 'status_enum',
  })
  status: EntityStatusEnum;

  @AutoMap()
  @Column({ type: 'int', nullable: true })
  created_by: number;

  @AutoMap()
  @CreateDateColumn()
  created_at!: Date;

  @AutoMap()
  @UpdateDateColumn()
  updated_at!: Date;

  @AutoMap()
  @DeleteDateColumn({ nullable: true, default: null })
  deleted_at!: Date;

  static collectedProperties(): string[] {
    if (!this._collectedProperties) {
      this._collectedProperties = [];
    }
    console.log('collectedProperties', this._collectedProperties);
    return this._collectedProperties;
  }

  private static _collectedProperties: string[];
}
