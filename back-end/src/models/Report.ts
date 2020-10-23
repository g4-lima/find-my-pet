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
}

export default Report;
