import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Report from './Report';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  path: string;

  @OneToOne(() => Report, report => report.image)
  @JoinColumn({ name: 'report_id' })
  report: Report;
}
