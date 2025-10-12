FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache bash git
COPY ../../package.json ../../pnpm-workspace.yaml ./
COPY ../../pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm fetch
COPY ../../ .
RUN corepack enable pnpm && pnpm install --offline
EXPOSE 8081
CMD ["pnpm", "--filter", "apps-mobile", "dev"]
