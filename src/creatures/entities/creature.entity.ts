import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column } from 'typeorm';

@Entity()
export class CreaturesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  lastSee: string;

  @Column({ default: 1 })
  countLastSee: number;

  @Column({ default: false })
  extinct: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  update: Date;
}

