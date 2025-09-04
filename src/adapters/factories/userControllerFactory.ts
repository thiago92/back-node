import { Request, Response } from "express";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { LogErrorTypeormRepository } from "../../data-source/db/repository/logErrorTypeormRepository";
import { UserController } from "../controllers/user.controller";

const userController = new UserController();
const logRepo = new LogErrorTypeormRepository();

export const makeCreateUserController = () => {
  const controller = async (req: Request, res: Response) => {
    const result = await userController.create(req, res);
    return result ?? res.status(500).json({ error: "Unexpected error" });
  };
  return new LogErrorControllerDecorator(controller, logRepo);
};

export const makeListUserController = () => {
  const controller = async (req: Request, res: Response) => {
    const result = await userController.list(req, res);
    return result ?? res.status(500).json({ error: "Unexpected error" });
  };
  return new LogErrorControllerDecorator(controller, logRepo);
};

export const makeGetUserController = () => {
  const controller = async (req: Request, res: Response) => {
    const result = await userController.get(req, res);
    return result ?? res.status(500).json({ error: "Unexpected error" });
  };
  return new LogErrorControllerDecorator(controller, logRepo);
};

export const makeUpdateUserController = () => {
  const controller = async (req: Request, res: Response) => {
    const result = await userController.update(req, res);
    return result ?? res.status(500).json({ error: "Unexpected error" });
  };
  return new LogErrorControllerDecorator(controller, logRepo);
};

export const makeDeleteUserController = () => {
  const controller = async (req: Request, res: Response) => {
    const result = await userController.delete(req, res);
    return result ?? res.status(500).json({ error: "Unexpected error" });
  };
  return new LogErrorControllerDecorator(controller, logRepo);
};
