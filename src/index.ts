import express, { Request, Response } from "express";
import "dotenv/config";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de teste
app.get("/", (req: Request, res: Response) => {
  res.send("API rodando 🚀");
});

// Inicializa servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


app.use("/users", userRoutes);