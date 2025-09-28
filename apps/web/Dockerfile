# syntax=docker/dockerfile:1.7-labs

# 1) Base deps
FROM node:20-alpine AS base
WORKDIR /app

# 2) Install dependencies (only package.json for better layer caching)
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit --fund=false

# 3) Build
FROM base AS build
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 4) Production runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Next.js standalone output
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
COPY --from=build /app/content ./content

EXPOSE 3000
CMD ["node", "server.js"]


