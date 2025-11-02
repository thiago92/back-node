import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Portfolio Node",
      version: "1.0.0",
      description: "API de exemplo com CRUD de usuários e documentação Swagger",
    },
    servers: [
        { url: "http://localhost:3000", description: "Local" },
        //{ url: "https://back-node-zr66.onrender.com", description: "Produção" },
    ],
  },
  apis: [ 
    "./src/routes/*.ts", // dev
    "./dist/routes/*.js" // prod
  ], 
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
