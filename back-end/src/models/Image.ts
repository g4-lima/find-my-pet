import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Report from './Report';

@Entity('image')
class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @OneToOne(() => Report, report => report.image)
  @JoinColumn({ name: 'report_id' })
  report: Report;
}

export default Image;
