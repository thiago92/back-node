import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { ENV } from "../config/env";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: ENV.DB_HOST,
  port: 3306,
  username: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
  logging: true,
});
