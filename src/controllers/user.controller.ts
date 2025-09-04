import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const service = new UserService();

export class UserController {
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
    const newUser = await service.createUser(req.body);
    res.status(201).json(newUser);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "User ID is required" });
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
