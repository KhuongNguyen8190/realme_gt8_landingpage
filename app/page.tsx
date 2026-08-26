import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AddToCartButton from '@/components/AddToCartButton';
import WishlistButton from '@/components/WishlistButton';
import HeroImage from '@/components/HeroImage';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollTracker from '@/components/ScrollTracker';
import { Toaster } from 'react-hot-toast';
import { Cpu, Zap, ShieldCheck, Layers, Sliders, Smartphone } from 'lucide-react';

const PreOrderForm = dynamic(() => import('@/components/PreOrderForm'), {
  loading: () => <div className="w-full max-w-md mx-auto h-56 bg-blue-500/30 animate-pulse rounded-2xl mt-4"></div>,
});

const Chatbot = dynamic(() => import('@/components/Chatbot'), {
  loading: () => <div className="fixed bottom-6 right-6 w-14 h-14 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-full z-[100] shadow-lg"></div>,
});

export const metadata: Metadata = {
  title: 'Realme GT8 Pro - Kỷ nguyên Gaming Mới',
  description: 'Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8 Pro. Chip Snapdragon 8 Elite Gen 5, tản nhiệt buồng hơi siêu lớn và sạc nhanh 100W.',
  openGraph: {
    title: 'Realme GT8 Pro - Kỷ nguyên Gaming Mới',
    description: 'Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8 Pro.',
    images: ['/images/og-realme-gt8.jpg'],
  },
};

export default function LandingPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 relative min-h-screen">
      <Header />
      
      <Toaster 
        position="bottom-right" 
        containerStyle={{
          bottom: 90,
          zIndex: 100,
        }}
      />
      
      <ScrollTracker /> 

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[5%] right-[-10%] w-[260px] sm:w-[500px] h-[280px] sm:h-[500px] bg-indigo-500/15 dark:bg-indigo-500/5 rounded-full blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute top-[25%] left-[-10%] w-[200px] sm:w-[400px] h-[220px] sm:h-[400px] bg-cyan-500/15 dark:bg-cyan-500/5 rounded-full blur-[70px] sm:blur-[100px]"></div>
      </div>

      <section className="relative pt-24 pb-16 lg:pb-24"> 
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
          
          <div className="lg:col-span-7 text-left space-y-6 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Zap size={14} className="animate-pulse" /> Thế Hệ Gaming Smartphone Mới
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
              Hiệu Năng <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-300">
                Bứt Phá Giới Hạn
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Sức mạnh tối thượng từ vi xử lý thế hệ mới, hệ thống tản nhiệt buồng hơi độc quyền và màn hình gaming tần số quét siêu cao. Sinh ra để thống trị mọi tựa game.
            </p>
            
            <div className="flex flex-row gap-2 sm:gap-3 pt-4 w-full max-w-[360px] sm:max-w-[420px] mx-auto lg:mx-0 items-stretch">
              <div className="flex-1 flex">
                <AddToCartButton />
              </div>
              <div className="flex-1 flex">
                <a href="#features" className="w-full flex items-center justify-center px-2 sm:px-6 py-3.5 sm:py-4 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center rounded-xl font-bold text-xs sm:text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
                  Khám Phá
                </a>
              </div>
              <div className="flex-none flex">
                <WishlistButton />
              </div>
            </div>
          </div>

          <HeroImage />

        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/40 border-y border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">Vũ Khí Tối Thượng Của Game Thủ</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                Sở hữu những công nghệ phần cứng tiên phong đột phá, mang lại trải nghiệm mượt mà tuyệt đối.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Cpu size={24} />, title: 'Snapdragon 8 Elite', desc: 'Tiến trình 3nm tối tân mang lại hiệu năng CPU vượt trội 45% và tiết kiệm điện năng tối đa.' },
              { icon: <Zap size={24} />, title: 'Sạc Siêu Tốc 150W', desc: 'Công nghệ sạc an toàn thông minh, nạp đầy 50% pin chỉ trong vỏn vẹn 7 phút ngắn ngủi.' },
              { icon: <Layers size={24} />, title: 'Tản Nhiệt VC 3D Khổng Lồ', desc: 'Diện tích tản nhiệt chất lỏng siêu lớn giúp duy trì FPS ổn định, mát lạnh khi combat dài tập.' }
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div className="h-full p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 tracking-tight">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal direction="left">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">Thông Số Kỹ Thuật Chi Tiết</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base">
                Mọi chi tiết cấu hình đều được tối ưu chuyên biệt cho nhu cầu xử lý tác vụ nặng.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up">
            <div className="bg-white dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[500px] sm:min-w-full">
                  <tbody>
                    {[
                      { icon: <Cpu size={18} />, label: 'Bộ vi xử lý', value: 'Snapdragon 8 Elite (3nm, Nhân chính 4.6GHz)' },
                      { icon: <Smartphone size={18} />, label: 'Màn hình hiển thị', value: '6.78" LTPO AMOLED, 144Hz, Max 6000 nits' },
                      { icon: <Sliders size={18} />, label: 'Bộ nhớ cấu hình', value: '16GB LPDDR5X RAM | 512GB UFS 4.0' },
                      { icon: <ShieldCheck size={18} />, label: 'Hệ điều hành', value: 'Realme UI 6.0 trên nền tảng Android 15' }
                    ].map((spec, i) => (
                      <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                        <th className="py-4 px-5 font-semibold bg-gray-50/50 dark:bg-gray-900/20 w-1/3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <span className="flex items-center gap-3">
                            <span className="text-gray-400 shrink-0">{spec.icon}</span>
                            {spec.label}
                          </span>
                        </th>
                        <td className="py-4 px-5 text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="pre-order" className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl mx-4 sm:mx-6 mb-12 shadow-xl shadow-blue-500/20">
        <ScrollReveal>
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Trở Thành Người Sở Hữu Đầu Tiên</h3>
            <p className="text-blue-100 max-w-md mx-auto text-xs sm:text-base">
              Đăng ký thông tin ngay hôm nay để có cơ hội nhận voucher gaming độc quyền và giảm giá trực tiếp.
            </p>
            <PreOrderForm />
          </div>
        </ScrollReveal>
      </section>
      <Footer />
      <Chatbot />
    </main>
  );
}