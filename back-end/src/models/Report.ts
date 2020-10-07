import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('reports')
class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  responsible: string;

  @Column()
  whatsapp: string;

  @Column()
  location: string;

  @Column()
  petName: string;

  @Column()
  petDescription: string;

  @Column()
  petPhoto: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Report;
