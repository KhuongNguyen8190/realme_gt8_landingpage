"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingCart, MessageCircle } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tighter cursor-pointer shrink-0">
            GT8<span className="text-blue-600">Pro</span>
          </h1>
          
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Tính năng</a>
            <a href="#specs" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Thông số</a>
            <a href="#pre-order" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Đặt trước</a>
          </nav>

          <div className="flex items-center gap-1 sm:gap-3 z-50">
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <MessageCircle size={20} />
            </button>

            <button onClick={() => setIsCartOpen(true)} className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition relative">
              <ShoppingCart size={20} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Sửa class: Hiển thị nhỏ gọn trên Mobile thay vì ẩn hoàn toàn */}
            <button className="px-3 py-1.5 sm:px-5 sm:py-2 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-bold hover:bg-blue-700 transition shadow-md shrink-0 ml-1">
              Mua Ngay
            </button>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}