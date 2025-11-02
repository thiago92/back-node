import { Request, Response } from "express";
import { UserService } from "../../../domain/services/UserService";
import { Validation } from "../../../application/validators/interfaces/validation";
import { DateValidatorAdapter } from "../../../application/validators/adapters/DateValidatorAdapter";
import { DateValidation } from "../../../application/validators/impl/DateValidation";
import { RequiredFieldValidation } from "../../../application/validators/impl/RequiredFieldValidation";
import { EmailValidation } from "../../../application/validators/impl/EmailValidation";
import { EmailValidatorAdapter } from "../../../application/validators/adapters/EmailValidatorAdapter";


const service = new UserService();

// Configurações dos validadores
const validations: Validation[] = [
  new RequiredFieldValidation("name"),
  new RequiredFieldValidation("email"),
  new DateValidation("dateOfBirth", new DateValidatorAdapter()),
  new EmailValidation("email", new EmailValidatorAdapter()),
];

export class UserController {
  private validate(data: any): string | null {
    for (const validation of validations) {
      const error = validation.validate(data);
      if (error) return error.message;
    }
    return null;
  }

  async list(req: Request, res: Response) {
    const users = await service.listUsers();
    res.json(users);
  }

  async get(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "User ID is required" });
    const user = await service.getUser(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  }

  async create(req: Request, res: Response) {
    try {
      const newUser = await service.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err: any) {
      if (err.name === "EmailAlreadyExistsError") {
        return res.status(400).json({ error: err.message });
      }
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "User ID is required" });

    const error = this.validate(req.body);
    if (error) return res.status(400).json({ error });

    const updated = await service.updateUser(id, req.body);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.json(updated);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "User ID is required" });
    await service.deleteUser(id);
    res.status(204).send();
  }
}
