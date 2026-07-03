import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realme GT8 - Kỷ nguyên Gaming Mới',
  description: 'Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8. Chip Snapdragon 8 Elite, tản nhiệt buồng hơi siêu lớn và sạc nhanh 150W.',
  openGraph: {
    title: 'Realme GT8 - Kỷ nguyên Gaming Mới',
    description: 'Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8.',
    images: ['/images/og-realme-gt8.jpg'], // Bạn có thể thêm ảnh sau vào public/images
  },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      
      {/* HEADER SECTION */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter">GT8<span className="text-blue-600">Pro</span></h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="hover:text-blue-600 transition">Tính năng</a>
            <a href="#specs" className="hover:text-blue-600 transition">Thông số</a>
            <a href="#pre-order" className="hover:text-blue-600 transition">Đặt trước</a>
          </nav>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            Mua Ngay
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hiệu Năng <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Bứt Phá</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Sức mạnh vô song, thiết kế đậm chất tương lai. Sinh ra để dẫn đầu mọi bảng xếp hạng.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#pre-order" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Đăng Ký Đặt Trước
            </a>
          </div>
        </div>
        {/* Vòng sáng trang trí background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 -z-10 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Công Nghệ Đỉnh Cao</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Snapdragon 8 Elite', 'Màn hình OLED 144Hz', 'Sạc siêu tốc 150W'].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">{idx + 1}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{feature}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Trải nghiệm mượt mà không độ trễ, tối ưu hóa tối đa cho các tựa game nặng nhất hiện nay.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS SECTION */}
      <section id="specs" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">Thông Số Kỹ Thuật</h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
              <tbody>
                {[
                  ['Vi xử lý', 'Snapdragon 8 Elite (3nm)'],
                  ['Màn hình', '6.78" LTPO AMOLED, 144Hz, HDR10+'],
                  ['RAM/ROM', '16GB LPDDR5X / 512GB UFS 4.0'],
                  ['Pin & Sạc', '5500mAh, Sạc siêu nhanh 150W'],
                ].map(([label, value], i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <th className="py-4 px-6 font-semibold bg-gray-50 dark:bg-gray-900/50 w-1/3">{label}</th>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section id="pre-order" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-3xl font-bold mb-4">Trở thành người sở hữu đầu tiên</h3>
          <p className="mb-8 text-blue-100">Đăng ký ngay để nhận thông tin mở bán và voucher giảm giá 1.000.000đ.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Nhập email của bạn..." 
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-bold transition-colors"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </section>
      
    </main>
  );
}