"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import CartSidebar from "./CartSidebar"; // Import the new Sidebar

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control sidebar visibility
  const { theme, setTheme } = useTheme();
  
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter">
            GT8<span className="text-blue-600">Pro</span>
          </h1>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features" className="hover:text-blue-600 transition">Tính năng</a>
            <a href="#specs" className="hover:text-blue-600 transition">Thông số</a>
            <a href="#pre-order" className="hover:text-blue-600 transition">Đặt trước</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Cart Button triggering the Sidebar */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition relative"
            >
              <ShoppingCart size={20} />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full animate-in zoom-in">
                  {totalItems}
                </span>
              )}
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <button className="hidden sm:block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              Mua Ngay
            </button>
          </div>
        </div>
      </header>

      {/* Render the Cart Sidebar Component */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}