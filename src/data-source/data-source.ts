import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { ENV } from "../config/env";

export const AppDataSource = new DataSource({
  type: ENV.DB_TYPE as any, // "mysql" | "mariadb" | "postgres" | etc
  host: ENV.DB_HOST,
  port: parseInt(ENV.DB_PORT, 10),
  username: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
  synchronize: false, // nunca usar true em produção 🚨
  logging: true,
});
