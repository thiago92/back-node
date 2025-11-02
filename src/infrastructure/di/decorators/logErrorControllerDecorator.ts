import { LogErrorRepository } from "../../../domain/repositories/logErrorRepository";
import { Request, Response } from "express";

export class LogErrorControllerDecorator {
  constructor(
    private readonly controller: (req: Request, res: Response) => Promise<Response>,
    private readonly logErrorRepository: LogErrorRepository
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      return await this.controller(req, res);
    } catch (error: any) {
      await this.logErrorRepository.log(error.stack);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}