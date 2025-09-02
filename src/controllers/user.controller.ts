import { Request, Response } from "express";
import { AppDataSource } from "../data-source/data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export const UserController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const users = await userRepository.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  },

  getId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: "ID do usuário não fornecido" });
      const user = await userRepository.findOneBy({ id: id });
      if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const user = userRepository.create(req.body);
      await userRepository.save(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: "ID do usuário não fornecido" });
      const user = await userRepository.findOneBy({ id: id });
      if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

      userRepository.merge(user, req.body);
      await userRepository.save(user);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: "ID do usuário não fornecido" });
      const result = await userRepository.delete(id);
      if (result.affected === 0) return res.status(404).json({ error: "Usuário não encontrado" });
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  },
};
