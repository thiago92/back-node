import { ErrorLog } from "../../../entities/Errors";
import { LogErrorRepository } from "../../../usecases/repository/logErrorRepository";
import { AppDataSource } from "../../data-source";

export class LogErrorTypeormRepository implements LogErrorRepository {
  private repo = AppDataSource.getRepository(ErrorLog);

  async log(stack: string): Promise<void> {
    const error = this.repo.create({ stack });
    await this.repo.save(error);
  }
}