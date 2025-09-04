import { app } from "./app";
import { AppDataSource } from "./data-source/data-source";
import { ENV } from "./config/env";

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
