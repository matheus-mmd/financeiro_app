FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl
COPY ../../package.json ../../pnpm-workspace.yaml ./
COPY ../../pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm fetch

FROM base AS build
COPY ../../ .
RUN corepack enable pnpm && pnpm install --offline && pnpm --filter apps-api build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/apps/api/dist ./dist
COPY --from=build /app/apps/api/package.json ./package.json
COPY --from=build /app/apps/api/prisma ./prisma
RUN corepack enable pnpm && pnpm install --prod --ignore-scripts
EXPOSE 3333
CMD ["pnpm", "start:prod"]
