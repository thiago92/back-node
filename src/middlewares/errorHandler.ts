import { NextFunction, Request, Response } from "express";
import { LogErrorTypeormRepository } from "../data-source/db/repository/logErrorTypeormRepository";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const logRepo = new LogErrorTypeormRepository();
  await logRepo.log(err.stack);

  return res.status(500).json({
    message: "Erro interno do servidor",
  });
};