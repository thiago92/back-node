import * as dotenv from "dotenv";

dotenv.config();

function getEnvVar(key: string, required = true): string {
  const value = process.env[key];
  if (!value && required) {
    throw new Error(`⚠️ Variável de ambiente ${key} não definida.`);
  }
  return value as string;
}

export const ENV = {
  DB_TYPE: getEnvVar("DB_TYPE"), 
  DB_HOST: getEnvVar("DB_HOST"),
  DB_USER: getEnvVar("DB_USER"),
  DB_PASS: getEnvVar("DB_PASS"),
  DB_NAME: getEnvVar("DB_NAME"),
  DB_PORT: process.env.DB_PORT || "3306",
  PORT: process.env.PORT || "3000",
};
