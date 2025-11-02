import { ErrorLog } from "../../../domain/entities/Errors";
import { LogErrorRepository } from "../../../domain/repositories/logErrorRepository";
import { AppDataSource } from "../../database/config/data-source";

export class TypeOrmLogErrorTypeormRepository implements LogErrorRepository {
  private repo = AppDataSource.getRepository(ErrorLog);

  async log(stack: string): Promise<void> {
    const error = this.repo.create({ stack });
    await this.repo.save(error);
  }
}