import { NextFunction, Request, Response } from "express";
import { TypeOrmLogErrorTypeormRepository } from "../../repositories/typeorm/TypeOrmLogErrorTypeormRepository";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const logRepo = new TypeOrmLogErrorTypeormRepository();
  await logRepo.log(err.stack);

  return res.status(500).json({
    message: "Erro interno do servidor",
  });
};