import { Repository } from "typeorm";
import { UserRepository, CreateUserData, UpdateUserData } from "../../../domain/repositories/UserRepository";
import { User } from "../../../domain/entities/User";
import { AppDataSource } from "../../database/config/data-source";

export class TypeOrmUserRepositoryMySQL implements UserRepository {
  /** Obtém o repositório sempre que precisar (defensivo contra DS não inicializado) */
  private getRepo(): Repository<User> {
    if (!AppDataSource.isInitialized) {
      throw new Error("DataSource não inicializado. Chame AppDataSource.initialize() antes de usar o repositório.");
    }
    return AppDataSource.getRepository(User);
  }

  async getAll(): Promise<User[]> {
    const repo = this.getRepo();
    return repo.find();
  }

  async getById(id: string): Promise<User | null> {
    const repo = this.getRepo();
    return repo.findOne({ where: { id } });
  }

  async create(data: CreateUserData): Promise<User> {
    const repo = this.getRepo();
    const entity = repo.create(data); // instancia com validação de metadados
    return repo.save(entity);
  }

  async update(id: string, data: UpdateUserData): Promise<User | null> {
    const repo = this.getRepo();
    const existing = await repo.findOne({ where: { id } });
    if (!existing) return null;

    repo.merge(existing, data); // aplica apenas campos enviados
    return repo.save(existing);
  }

  async delete(id: string): Promise<boolean> {
    const repo = this.getRepo();
    const result = await repo.delete({ id });
    return (result.affected ?? 0) > 0;
  }
}
