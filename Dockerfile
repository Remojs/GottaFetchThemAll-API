# Stage 1 – deps only (cache layer)
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Stage 2 – final image
FROM node:18-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
EXPOSE 9000

CMD ["node", "index.js"]
