import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import Report from './Report';

@Entity('images')
class Image {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  path: string;

  // @OneToOne(() => Report, report => report.images)
  // @JoinColumn({ name: 'report_id' })
  // report: Report;
}
export default Image;
