import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("errors")
export class ErrorLog {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  stack!: string;

  @CreateDateColumn()
  createdAt!: Date;
}