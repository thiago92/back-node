// src/repositories/interfaces/IUserRepository.ts
import { User } from "../entities/User";

export type CreateUserData = Pick<User, "name" | "email" | "dateOfBirth">;
export type UpdateUserData = Partial<CreateUserData>;

export interface UserRepository {
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User | null>;
  create(data: CreateUserData): Promise<User>;
  update(id: string, data: UpdateUserData): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}
