# Realme GT8 Pro - Next.js Landing Page

Dự án Landing Page tối ưu hóa hiệu năng, tích hợp AI Chatbot và các tính năng tương tác người dùng hiện đại, được xây dựng để giới thiệu sản phẩm flagship Realme GT8 Pro.

## 🚀 Tính năng chính

### 1. Giao diện & Trải nghiệm (UI/UX)
- **Responsive Design:** Tối ưu hóa hoàn hảo trên Mobile, Tablet và Desktop.
- **Dark Mode:** Hỗ trợ chuyển đổi chủ đề sáng/tối linh hoạt với `next-themes`.
- **Scroll Animations:** Tích hợp hiệu ứng cuộn mượt mà với `framer-motion`.
- **Micro-interactions:** Sử dụng `react-hot-toast` để thông báo các hành động giỏ hàng/yêu thích.

### 2. Logic & Xử lý dữ liệu
- **State Management:** Quản lý Giỏ hàng, Yêu thích và Lịch sử xem bằng `Zustand` với tính năng đồng bộ `localStorage`.
- **Form Handling:** Validate dữ liệu người dùng nghiêm ngặt bằng `react-hook-form` và `zod`.
- **Webhook Integration:** Tự động gửi dữ liệu đăng ký qua API Route tới Webhook (hỗ trợ báo cáo real-time).
- **AI Chatbot:** Tích hợp AI tư vấn sản phẩm sử dụng `Google Gemini API` (phiên bản `gemini-1.5-flash`).

### 3. Tối ưu hóa & Hiệu năng
- **Performance:** Tối ưu hóa ảnh với `next/image`.
- **SEO Ready:** Cấu hình Metadata đầy đủ cho Open Graph.
- **SEO Score:** Đạt điểm số cao trên Google PageSpeed Insights.

## 🛠 Công nghệ sử dụng
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Form & Validation:** React Hook Form & Zod
- **AI Integration:** Google Generative AI (Gemini)
- **Deployment:** Vercel

## ⚙️ Hướng dẫn cài đặt

### 1. Điều kiện cần
- Node.js (phiên bản 18 trở lên)
- npm hoặc yarn

### 2. Cài đặt
```bash
# Clone repository
git clone https://github.com/KhuongNguyen8190/realme_gt8_landingpage.git

# Cài đặt dependencies
npm install

# Tạo file .env.local ở thư mục gốc và cấu hình API Key
cp .env.example .env.local 
# Lưu ý: Mở file .env.local và điền GEMINI_API_KEY của bạn vào

# Chạy server development
npm run dev