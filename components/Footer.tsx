export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 dark:bg-gray-950 dark:text-gray-400 border-t border-blue-900/40 dark:border-gray-900 py-12 lg:py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10 text-center md:text-left">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              GT8<span className="text-blue-500">Pro</span>
            </h2>
            <p className="text-blue-200/70 dark:text-gray-500 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Kỷ nguyên Gaming Smartphone bứt phá giới hạn với sức mạnh tối thượng. Giải pháp hoàn hảo cho mọi tựa game AAA.
            </p>
            <p className="text-blue-200/70 dark:text-gray-500 text-sm font-semibold">
              © 2026 realme GT8 Pro Project. <br />
              Phát triển bởi Nguyễn Duy Khương.
            </p>
          </div>

          <div className="flex flex-col space-y-3 items-center md:items-start">
            <h3 className="text-white font-semibold mb-2">Chính sách & Hỗ trợ</h3>
            <a href="#" className="text-sm text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Điều khoản sử dụng</a>
            <a href="#" className="text-sm text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Chính sách bảo mật</a>
            <a href="#" className="text-sm text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Chính sách bảo hành</a>
            <a href="#" className="text-sm text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Hướng dẫn thanh toán</a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-white font-semibold mb-2">Kết nối với chúng tôi</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/nguyenkhuong0990" aria-label="Facebook" className="p-2.5 bg-blue-900/50 hover:bg-blue-600 rounded-full text-blue-200 hover:text-white transition-all hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/dee.kh_g/" aria-label="Instagram" className="p-2.5 bg-blue-900/50 hover:bg-pink-600 rounded-full text-blue-200 hover:text-white transition-all hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.youtube.com/@realmeVietnam" aria-label="YouTube" className="p-2.5 bg-blue-900/50 hover:bg-red-600 rounded-full text-blue-200 hover:text-white transition-all hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://github.com/KhuongNguyen8190" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2.5 bg-blue-900/50 hover:bg-gray-800 rounded-full text-blue-200 hover:text-white transition-all hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900/50 dark:border-gray-800 pt-6 text-center text-xs text-blue-300/50 dark:text-gray-600">
          Dự án được thiết kế cho mục đích thực tập công nghệ Web và Demo tính năng. Không mang tính chất thương mại.
        </div>
      </div>
    </footer>
  );
}