FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

COPY . .

EXPOSE 1337

CMD ["pnpm", "develop"]
