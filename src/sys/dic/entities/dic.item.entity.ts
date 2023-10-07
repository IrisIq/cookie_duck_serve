// use/entities/user.entity.ts
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { DictTypeEntity } from './dic.type.entity';
// import { Exclude } from 'class-transformer';
// import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_dict_item')
export class DictItemEntity {
  @PrimaryGeneratedColumn({ name: 'dic_code', comment: '主键' })
  dicCode: number;

  @Column({ name: 'dic_id', comment: '所属字典id' })
  @ManyToOne(() => DictTypeEntity, (dictTypeEntity) => dictTypeEntity.dicId)
  dicId: number;

  @Column({ name: 'dic_key', comment: '字典 键' })
  dicKey: string;

  @Column({ name: 'dic_value', comment: '字典 值' })
  dicValue: string;

  @Column({ name: 'dic_sort', comment: '排序' })
  dicSort: number;

  @Column({
    name: 'status',
    type: 'char',
    length: 1,
    default: 1,
    comment: '状态 0停用，1使用',
  })
  status: number;

  @Column({ name: 'create_by', comment: '创建人' })
  createBy: string;

  @CreateDateColumn()
  @Column({ name: 'create_time', comment: '创建时间', type: 'timestamp' })
  createTime: Date;

  @Column({ name: 'update_by', comment: '更新人' })
  updateBy: string;

  @UpdateDateColumn()
  @Column({ name: 'update_time', comment: '更新时间', type: 'timestamp' })
  updateTime: Date;

  @Column({ comment: '备注' })
  remark: string;
}
