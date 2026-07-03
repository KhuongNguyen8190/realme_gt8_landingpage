"use client";

import { useCartStore } from "@/store/useCartStore";
import toast from "react-hot-toast";

export default function AddToCartButton() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ 
      id: "realme-gt8-pro", 
      name: "Realme GT8 Pro", 
      price: 15990000, 
      quantity: 1 
    });
    
    // Hiển thị thông báo Toast khi click
    toast.success("Đã thêm Realme GT8 Pro vào giỏ hàng!", {
      style: {
        borderRadius: '12px',
        background: '#030712', // tone màu tối viễn tưởng
        color: '#fff',
        border: '1px solid #1e3a8a'
      },
      iconTheme: {
        primary: '#3b82f6',
        secondary: '#fff',
      },
    });
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="w-full sm:w-auto px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl font-bold text-base hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-gray-950/10 dark:shadow-white/5"
    >
      Thêm Vào Giỏ Hàng
    </button>
  );
}