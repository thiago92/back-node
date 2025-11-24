import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("progress")
export class Progress {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "int" })
    value!: number;

    @Column({ length: 100 })
    label!: string;

    @CreateDateColumn()
    created_at: Date = new Date();
}