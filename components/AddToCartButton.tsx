"use client";

import { useCartStore } from "@/store/useCartStore";
import toast from "react-hot-toast";

export default function AddToCartButton() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id: "realme-gt8-pro", name: "Realme GT8 Pro", price: 15990000, quantity: 1 });
    toast.success("Đã thêm vào giỏ hàng!", {
      style: { borderRadius: '12px', background: '#030712', color: '#fff' },
    });
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="w-full h-full px-2 sm:px-6 py-3.5 sm:py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl font-bold text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center border border-transparent"
    >
      Thêm Giỏ Hàng
    </button>
  );
}