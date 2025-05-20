import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, unique: true })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ unique: true })
    phone_number: string;

    @Column({ nullable: false })
    full_name: string;

    @Column({ nullable: true })
    image: string;

    @Column({ nullable: false })
    date_of_birth: Date;

    @Column({ default: "USER" })
    role: string;

    @Column({ nullable: true })
    last_login: Date;

    @Column({ nullable: true, type: 'longtext' })
    refresh_token: string;

    @CreateDateColumn({ nullable: true })
    created_at: Date;
}
