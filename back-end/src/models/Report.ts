import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
// import Image from './Image';

@Entity('reports')
class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  responsible: string;

  @Column()
  pet_name: string;

  @Column()
  pet_description: string;

  @Column()
  whatsapp: string;

  @CreateDateColumn()
  created_at: Date;

  // @OneToOne(() => Image, image => image.report, {
  //   cascade: ['insert', 'update'],
  // })
  // @JoinColumn({ name: 'report_id' })
  // images: Image[];
}

export default Report;
