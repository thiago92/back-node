# Etapa 1 - Build da aplicação
FROM node:21.7.3-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# COPY .env .env
RUN npm run build

# Etapa 2 - Runtime
FROM node:21.7.3-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./

RUN npm install --omit=dev

CMD ["node", "dist/index.js"]
