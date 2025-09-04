import { IUserRepository } from "./interfaces/IUserRepository";
import { UserRepositoryMySQL } from "./mysql/UserRepositoryMySQL";
import { ENV } from "../config/env";

let userRepository: IUserRepository;

if (ENV.DB_TYPE === "mysql") {
  userRepository = new UserRepositoryMySQL();
} else {
  throw new Error("DB_TYPE não suportado");
}

export { userRepository };
