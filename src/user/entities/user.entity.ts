// use/entities/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Exclude } from 'class-transformer';

import * as bcrypt from 'bcryptjs';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100, comment: '用户名' })
  username: string;

  @Column({ length: 100, comment: '昵称' })
  nickname: string;

  // @Exclude()
  @Column({ select: false, comment: '密码' })
  password: string;

  @Column({ comment: '头像', nullable: true })
  avatar: string;

  @Column({ comment: '邮箱' })
  email: string;

  @Column('simple-enum', {
    enum: ['root', 'author', 'visitor'],
    comment: '用户角色',
  })
  role: string; // 用户角色

  @Column({
    name: 'create_time',
    type: 'timestamp',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column({
    name: 'update_time',
    type: 'timestamp',
    comment: '更新时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password);
  }
}
