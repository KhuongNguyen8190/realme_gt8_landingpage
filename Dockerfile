# --- GIAI ĐOẠN 1: Build ứng dụng React ---
FROM node:18-alpine AS builder
WORKDIR /app

# Copy file quản lý thư viện trước để tận dụng cache
COPY package.json package-lock.json ./
RUN npm install

# Copy toàn bộ mã nguồn và tiến hành build
COPY . .
RUN npm run build

# --- GIAI ĐOẠN 2: Dùng Nginx để serve static files ---
FROM nginx:alpine

# Copy kết quả build từ giai đoạn 1 vào thư mục công khai của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# (Lưu ý: Nếu project của em dùng thư mục build là "build" thay vì "dist", hãy đổi chữ "dist" thành "build" nhé)

# Mở cổng 80 cho web server
EXPOSE 80

# Chạy Nginx ở chế độ foreground
CMD ["nginx", "-g", "daemon off;"]

