// use/entities/user.entity.ts
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ArticlEntity } from 'src/article/article.entity';
import { ApiProperty } from '@nestjs/swagger';

import * as bcrypt from 'bcryptjs';

@Entity('user')
export class UserEntity {
  @ApiProperty({ description: '用户id' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100, comment: '用户名' })
  username: string;

  @Column({ length: 100, comment: '昵称' })
  nickname: string;

  // @Exclude()
  @Column({ type: 'varchar', length: 255, select: false, comment: '密码' })
  password: string;

  @Column({ comment: '头像', nullable: true })
  avatar: string;

  @Column({ type: 'varchar', length: 255, comment: '邮箱' })
  email: string;

  @Column('simple-enum', {
    enum: ['root', 'author', 'visitor'],
    default: 'visitor',
    comment: '用户角色',
  })
  role: string;

  @OneToMany(() => ArticlEntity, (post) => post.author)
  posts: ArticlEntity[];

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

  // 这里不能走
  // @BeforeInsert()
  // async encryptPwd() {
  //   console.log(this.password);
  //   if (!this.password) return;
  //   this.password = await bcrypt.hashSync(this.password);
  // }
}
