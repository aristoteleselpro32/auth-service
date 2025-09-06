# Railway Dockerfile (Node 18)
FROM node:18-alpine

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm ci --omit=dev || npm install --only=production

# Copiar el resto del código
COPY . .

ENV NODE_ENV=production
EXPOSE 4000

CMD ["node", "src/index.js"]
