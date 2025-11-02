import { app } from "./app";
import { AppDataSource } from "./infrastructure/database/config/data-source";
import { ENV } from "./infrastructure/config/env";
import cors from "cors";

app.use(cors());

const PORT = ENV.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco estabelecida ✅");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco:", err);
  });
