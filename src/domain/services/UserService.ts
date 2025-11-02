import { EmailAlreadyExistsError } from "../errors/EmailAlreadyExistsError";
import { userRepository } from "../../infrastructure/di/factories";

export class UserService {
  async listUsers() {
    return userRepository.getAll();
  }

  async getUser(id: string) {
    return userRepository.getById(id);
  }

  async createUser(data: any) {
    try {
      return await userRepository.create(data);
    } catch (err: any) {
      // Código do MySQL para duplicidade
      if (err.code === "ER_DUP_ENTRY") {
        throw new EmailAlreadyExistsError(data.email);
      }
      throw err;
    }
  }

  async updateUser(id: string, data: any) {
    return userRepository.update(id, data);
  }

  async deleteUser(id: string) {
    return userRepository.delete(id);
  }
}
