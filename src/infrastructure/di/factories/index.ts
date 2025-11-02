import { UserRepository } from "../../../domain/repositories/UserRepository";
import { TypeOrmUserRepositoryMySQL } from "../../repositories/typeorm/TypeOrmUserRepositoryMySQL";
import { ENV } from "../../config/env";

let userRepository: UserRepository;

if (ENV.DB_TYPE === "mysql") {
  userRepository = new TypeOrmUserRepositoryMySQL();
} else {
  throw new Error("DB_TYPE não suportado");
}

export { userRepository };
