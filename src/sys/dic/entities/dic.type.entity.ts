import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity('sys_dict_item')
export class DictTypeEntity {
  @PrimaryGeneratedColumn({ name: 'dic_id' })
  dicId: number;

  // dic_name
  @Column({ name: 'dic_name', length: 20, nullable: true })
  dicName: string;

  // dic_numbering

  @Column({ name: 'dic_numbering', length: 36, nullable: true })
  dicNumbering: string;

  // dic_status
  @Column({
    name: 'dic_status',
    type: 'char',
    length: 1,
    default: 1,
    comment: '使用状态 1:使用，0:删除',
  })
  dicStatus: string;
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
