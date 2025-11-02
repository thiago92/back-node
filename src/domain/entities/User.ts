import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ length: 100 })
    name!: string;

    @Column({ unique: true, length: 100 })
    email!: string;

    @Column({ type: "date", nullable: true })
    dateOfBirth: Date | null = null;

    @CreateDateColumn()
    created_at: Date = new Date();
}