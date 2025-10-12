FROM node:20-alpine AS deps
WORKDIR /app
COPY ../../package.json ../../pnpm-workspace.yaml ./
COPY ../../pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm fetch

FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../ .
RUN corepack enable pnpm && pnpm install --offline && pnpm --filter apps-web build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/public ./public
COPY --from=builder /app/apps/web/package.json ./package.json
RUN corepack enable pnpm && pnpm install --prod --ignore-scripts
EXPOSE 3000
CMD ["pnpm", "start"]
