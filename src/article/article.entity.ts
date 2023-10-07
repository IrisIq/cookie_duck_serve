import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('article')
export class ArticlEntity {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  // 标题
  @Column({ length: 50 })
  title: string;

  // 作者
  @Column({ length: 20 })
  author: string;

  // 内容
  @Column('text')
  content: string;

  @Column({ type: 'text', default: null })
  img_url: string;

  @Column({ type: 'text', default: null })
  type: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;

  @Column({ type: 'tinyint', default: 1 })
  is_show: boolean;
}
