"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PreOrderForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Giả lập độ trễ gọi API Webhook
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất.", {
      style: { borderRadius: '12px', background: '#030712', color: '#fff', border: '1px solid #1e3a8a' },
    });
    
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto pt-6 text-left">
      <div className="flex flex-col sm:flex-row gap-4">
        <input 
          type="text" 
          name="name"
          placeholder="Họ và tên" 
          required
          className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white border border-transparent shadow-inner"
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Số điện thoại" 
          required
          pattern="[0-9]{10,11}"
          title="Vui lòng nhập số điện thoại hợp lệ (10-11 số)"
          className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white border border-transparent shadow-inner"
        />
      </div>
      <input 
        type="email" 
        name="email"
        placeholder="Nhập địa chỉ email của bạn..." 
        required
        className="w-full px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white border border-transparent shadow-inner"
      />
      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full mt-2 px-6 py-4 bg-gray-950 disabled:bg-gray-800 hover:bg-black text-white rounded-xl font-bold text-sm transition-colors shadow-lg active:scale-95 flex items-center justify-center min-h-[52px]"
      >
        {isLoading ? (
          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
        ) : (
          "Đăng Ký Đặt Trước & Nhận Ưu Đãi"
        )}
      </button>
      <p className="text-center text-xs text-blue-200/80 mt-2">
        *Thông tin của bạn sẽ được bảo mật tuyệt đối theo chính sách của Realme.
      </p>
    </form>
  );
}