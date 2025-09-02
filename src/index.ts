import express, { Request, Response } from "express";
import "dotenv/config";
import { AppDataSource } from "./data-source/data-source";
import userRoutes from "./routes/user.routes";
import testRoutes from "./routes/test.routes";
import { setupSwagger } from "./docs/swagger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Inicializa o TypeORM antes de subir o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco estabelecida ✅");

    // Configura Swagger
    setupSwagger(app);

    // Rotas
    app.use("/users", userRoutes);
    app.use("/test", testRoutes);

    // Rota de teste
    app.get("/", (req: Request, res: Response) => {
      res.send("API rodando 🚀");
    });

    // Inicializa servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco:", err);
  });
