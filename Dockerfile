# --- GIAI ĐOẠN 1: Cài đặt dependencies và Build ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copy các file cấu hình package
COPY package.json package-lock.json ./
RUN npm ci

# Copy toàn bộ mã nguồn
COPY . .

# Nếu project của em cần biến môi trường lúc build, hãy khai báo ở đây (ví dụ: ENV NEXT_PUBLIC_API_URL=...)
RUN npm run build

# --- GIAI ĐOẠN 2: Chạy Production Server ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy các file cần thiết từ giai đoạn build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]