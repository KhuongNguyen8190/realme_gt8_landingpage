"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';

// 1. Khai báo Schema Validate bằng Zod
const formSchema = z.object({
  name: z.string().min(2, "Tên quá ngắn"),
  phone: z.string().regex(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ"),
  email: z.string().email("Định dạng email không đúng"),
});

type FormData = z.infer<typeof formSchema>;

export default function PreOrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Đăng ký thành công! Dữ liệu đã gửi qua Webhook.", {
          style: { borderRadius: '12px', background: '#030712', color: '#fff', border: '1px solid #1e3a8a' },
        });
        reset(); // Xóa trắng form
      } else {
        toast.error("Lỗi khi gửi dữ liệu!");
      }
    } catch (error) {
      toast.error("Không thể kết nối đến máy chủ.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-lg mx-auto pt-6 text-left">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input 
            {...register("name")}
            placeholder="Họ và tên" 
            className="w-full px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white border border-transparent shadow-inner"
          />
          {errors.name && <p className="text-red-300 text-xs mt-1 ml-1">{errors.name.message}</p>}
        </div>
        <div className="flex-1">
          <input 
            {...register("phone")}
            placeholder="Số điện thoại" 
            className="w-full px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white border border-transparent shadow-inner"
          />
          {errors.phone && <p className="text-red-300 text-xs mt-1 ml-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <input 
          {...register("email")}
          placeholder="Nhập địa chỉ email của bạn..." 
          className="w-full px-5 py-3.5 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white border border-transparent shadow-inner"
        />
        {errors.email && <p className="text-red-300 text-xs mt-1 ml-1">{errors.email.message}</p>}
      </div>
      
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
        *Dữ liệu đang được gửi bảo mật qua Webhook API nội bộ.
      </p>
    </form>
  );
}