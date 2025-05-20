import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    name: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: true })
    image: string;

    @CreateDateColumn({ nullable: true })
    created_at: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at: Date;
}
