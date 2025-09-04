import express, { Request, Response } from "express";
import { setupSwagger } from "./docs/swagger";
import userRoutes from "./routes/user.routes";
import testRoutes from "./routes/test.routes";

const app = express();

app.use(express.json());

// Swagger
setupSwagger(app);

// Rotas
app.use("/users", userRoutes);
app.use("/test", testRoutes);

// Rota padrão
app.get("/", (req: Request, res: Response) => {
  res.send("API rodando 🚀");
});

export { app };
