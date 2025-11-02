import { Router } from "express";
import { AppDataSource } from "../../database/config/data-source";

const router = Router();

router.get("/ping", async (req, res) => {
  try {
    // Testa conexão tentando executar uma query simples
    const result = await AppDataSource.query("SELECT 1 AS result");

    res.json({ db: "conectado", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro de conexão com o banco" });
  }
});

export default router;
