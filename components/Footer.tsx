export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 dark:bg-gray-950 dark:text-gray-400 border-t border-blue-900/40 dark:border-gray-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p className="text-blue-200/70 dark:text-gray-500">© 2026 realme GT8 Project. Phát triển bởi Nguyễn Duy Khương.</p>
        <div className="flex gap-6">
          <a href="#" className="text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Điều khoản sử dụng</a>
          <a href="#" className="text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Chính sách bảo mật</a>
        </div>
      </div>
    </footer>
  );
}