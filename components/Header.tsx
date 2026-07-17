"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingCart, Heart } from "lucide-react";
import { useStore } from "@/store/useStore";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSidebarTab, setActiveSidebarTab] = useState<'cart'|'wishlist'>('cart');
  
  const { theme, setTheme } = useTheme();
  
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);
  
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistItems = wishlist.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  const openSidebar = (tab: 'cart' | 'wishlist') => {
    setActiveSidebarTab(tab);
    setIsSidebarOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-tighter cursor-pointer shrink-0">
            GT8<span className="text-blue-600">Pro</span>
          </h1>
          
          <div className="flex items-center gap-2 sm:gap-3 z-50">
            <button aria-label="Danh sách yêu thích" onClick={() => openSidebar('wishlist')} className="p-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 transition relative">
              <Heart size={20} />
              {mounted && totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {totalWishlistItems}
                </span>
              )}
            </button>

            <button aria-label="Giỏ hàng" onClick={() => openSidebar('cart')} className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition relative">
              <ShoppingCart size={20} />
              {mounted && totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {totalCartItems}
                </span>
              )}
            </button>

            {mounted && (
              <button aria-label="Đổi giao diện sáng tối" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} initialTab={activeSidebarTab} />
    </>
  );
}