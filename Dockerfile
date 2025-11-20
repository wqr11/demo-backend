FROM node:22-alpine AS builder

RUN npm i -g pnpm

WORKDIR /app
COPY package.json pnpm-lock*.yaml ./
RUN pnpm i --frozen-lockfile
COPY . .
RUN pnpm build

CMD ["pnpm", "start:prod"]