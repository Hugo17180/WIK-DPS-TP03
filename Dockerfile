FROM node:14 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc

# Deuxième étape : Exécuter l'application dans une image plus légère
FROM node:14-alpine

WORKDIR /app
COPY --from=builder /app .

RUN adduser -D hugo
USER hugo


CMD node ./build/index.js