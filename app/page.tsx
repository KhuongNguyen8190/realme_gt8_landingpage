import { Metadata } from 'next';
import Header from '@/components/Header';
import AddToCartButton from '@/components/AddToCartButton';
import { Toaster } from 'react-hot-toast';
import { Cpu, Zap, ShieldCheck, Layers, Sliders, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Realme GT8 - Kỷ nguyên Gaming Mới',
  description: 'Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8. Chip Snapdragon 8 Elite, tản nhiệt buồng hơi siêu lớn và sạc nhanh 150W.',
  openGraph: {
    title: 'Realme GT8 - Kỷ nguyên Gaming Mới',
    description: 'Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8.',
    images: ['/images/og-realme-gt8.jpg'],
  },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 overflow-x-hidden">
      <Header />
      <Toaster position="bottom-right" />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 flex items-center min-h-screen">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* Cột trái: Nội dung Text & CTA */}
          <div className="lg:col-span-7 text-left space-y-6 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Zap size={14} className="animate-pulse" /> Thế Hệ Gaming Smartphone Mới
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
              Hiệu Năng <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-300">
                Bứt Phá Giới Hạn
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Sức mạnh tối thượng từ vi xử lý thế hệ mới, hệ thống tản nhiệt buồng hơi độc quyền và màn hình gaming tần số quét siêu cao. Sinh ra để thống trị mọi tựa game.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <AddToCartButton />
              <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center rounded-xl font-bold text-base hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center justify-center">
                Khám Phá Tính Năng
              </a>
            </div>
          </div>

          {/* Cột phải: Khung ảnh Mockup sản phẩm */}
          <div className="lg:col-span-5 flex justify-center relative w-full aspect-square max-w-[450px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full border border-gray-200 dark:border-gray-800 rounded-3xl bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center group hover:border-blue-500/50 transition-colors">
              <Smartphone size={80} className="text-blue-500 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Realme GT8 Visual Placeholder</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">Kích thước chuẩn WebP/AVIF sẽ được tối ưu tại đây</p>
            </div>
          </div>

        </div>

        {/* Hiệu ứng luồng sáng nền */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/40 border-y border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Vũ Khí Tối Thượng Của Game Thủ</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Sở hữu những công nghệ phần cứng tiên phong đột phá, mang lại trải nghiệm mượt mà tuyệt đối.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu size={24} />, title: 'Snapdragon 8 Elite', desc: 'Tiến trình 3nm tối tân mang lại hiệu năng CPU vượt trội 45% và tiết kiệm điện năng tối đa.' },
              { icon: <Zap size={24} />, title: 'Sạc Siêu Tốc 150W', desc: 'Công nghệ sạc an toàn thông minh, nạp đầy 50% pin chỉ trong vỏn vẹn 7 phút ngắn ngủi.' },
              { icon: <Layers size={24} />, title: 'Tản Nhiệt VC 3D Khổng Lồ', desc: 'Diện tích tản nhiệt chất lỏng siêu lớn giúp duy trì FPS ổn định, mát lạnh khi combat dài tập.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all group">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS SECTION */}
      <section id="specs" className="py-24 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Thông Số Kỹ Thật Chi Tiết</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Mọi chi tiết cấu hình đều được tối ưu chuyên biệt cho nhu cầu xử lý tác vụ nặng.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <table className="w-full text-left border-collapse">
              <tbody>
                {[
                  { icon: <Cpu size={18} />, label: 'Bộ vi xử lý', value: 'Snapdragon 8 Elite (3nm, Tần số quét nhân chính 4.32GHz)' },
                  { icon: <Smartphone size={18} />, label: 'Màn hình hiển thị', value: '6.78" LTPO AMOLED, 144Hz, Độ sáng tối đa 6000 nits' },
                  { icon: <Sliders size={18} />, label: 'Bộ nhớ cấu hình', value: '16GB LPDDR5X RAM | 512GB UFS 4.0 Lưu trữ siêu tốc' },
                  { icon: <ShieldCheck size={18} />, label: 'Hệ điều hành', value: 'Realme UI 6.0 trên nền tảng Android 15' }
                ].map((spec, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                    <th className="py-5 px-6 font-semibold bg-gray-50/50 dark:bg-gray-900/20 w-1/3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="flex items-center gap-3">
                        <span className="text-gray-400">{spec.icon}</span>
                        {spec.label}
                      </span>
                    </th>
                    <td className="py-5 px-6 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section id="pre-order" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl mx-6 mb-12 shadow-xl shadow-blue-500/20">
        <div className="container mx-auto px-6 text-center max-w-2xl space-y-6">
          <h3 className="text-3xl font-bold tracking-tight">Trở Thành Người Sở Hữu Đầu Tiên</h3>
          <p className="text-blue-100 max-w-md mx-auto text-sm sm:text-base">
            Đăng ký thông tin ngay hôm nay để có cơ hội nhận voucher giảm giá 1.000.000đ và bộ quà tặng gaming độc quyền.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2">
            <input 
              type="email" 
              placeholder="Nhập địa chỉ email của bạn..." 
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white border border-transparent shadow-inner"
            />
            <button 
              type="submit" 
              className="px-6 py-3.5 bg-gray-950 hover:bg-black text-white rounded-xl font-bold text-sm transition-colors shadow-lg active:scale-95"
            >
              Đăng Ký Ngay
            </button>
          </form>
        </div>
      </section>

      {/* UPDATE: PREMIUM TECH BLUE FOOTER */}
      <footer className="bg-blue-950 text-blue-100 dark:bg-gray-950 dark:text-gray-400 border-t border-blue-900/40 dark:border-gray-900 py-12 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-blue-200/70 dark:text-gray-500">© 2026 GT8 Pro Project. Phát triển bởi Thực tập sinh IT.</p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Điều khoản sử dụng</a>
            <a href="#" className="text-blue-200/80 hover:text-white dark:text-gray-400 dark:hover:text-blue-400 transition">Chính sách bảo mật</a>
          </div>
        </div>
      </footer>
      
    </main>
  );
}