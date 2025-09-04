import { userRepository } from "../repositories";

export class UserService {
  async listUsers() {
    return userRepository.getAll();
  }

  async getUser(id: string) {
    return userRepository.getById(id);
  }

  async createUser(data: any) {
    return userRepository.create(data);
  }

  async updateUser(id: string, data: any) {
    return userRepository.update(id, data);
  }

  async deleteUser(id: string) {
    return userRepository.delete(id);
  }
}
