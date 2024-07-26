# Base image
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Server Development stage
FROM base AS server
WORKDIR /usr/src/app
COPY pnpm-workspace.yaml ./
COPY package.json pnpm-lock.yaml ./
COPY apps/server/package.json apps/server/
RUN pnpm install
COPY . .

RUN pnpm install --filter=server
EXPOSE 3001


# Web Development stage
FROM base AS web
WORKDIR /usr/src/app
COPY pnpm-workspace.yaml ./
COPY package.json pnpm-lock.yaml ./
COPY apps/web/package.json apps/web/
RUN pnpm install
COPY . .

RUN pnpm install --filter=web
EXPOSE 3000
