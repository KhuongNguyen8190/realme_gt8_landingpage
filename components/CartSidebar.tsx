"use client";

import { useStore } from "@/store/useStore";
import { X, Trash2, ShoppingBag, Heart, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'cart' | 'wishlist' | 'recent';
}

export default function CartSidebar({ isOpen, onClose, initialTab = 'cart' }: SidebarProps) {
  const { cart, wishlist, recentlyViewed, removeFromCart, toggleWishlist, addToCart } = useStore();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'cart' | 'wishlist' | 'recent'>(initialTab);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [isOpen, initialTab]);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price);
  };

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white dark:bg-gray-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold">Danh Sách Của Bạn</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full bg-gray-100 dark:bg-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Cụm Tabs */}
        <div className="flex border-b border-gray-100 dark:border-gray-800 px-2">
          <button onClick={() => setActiveTab('cart')} className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 border-b-2 ${activeTab === 'cart' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>
            <ShoppingBag size={16} /> Giỏ hàng
          </button>
          <button onClick={() => setActiveTab('wishlist')} className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 border-b-2 ${activeTab === 'wishlist' ? 'border-pink-600 text-pink-600' : 'border-transparent text-gray-500'}`}>
            <Heart size={16} /> Yêu thích
          </button>
          <button onClick={() => setActiveTab('recent')} className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center gap-2 border-b-2 ${activeTab === 'recent' ? 'border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300' : 'border-transparent text-gray-500'}`}>
            <Clock size={16} /> Đã xem
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          
          {/* TAB GIỎ HÀNG */}
          {activeTab === 'cart' && (
            cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Giỏ hàng trống.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                    <div className="text-blue-600 font-bold mt-1 text-sm">{formatPrice(item.price)}</div>
                    <div className="text-gray-500 text-xs mt-1">SL: {item.quantity}</div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-400 hover:text-red-600"><Trash2 size={18} /></button>
                </div>
              ))
            )
          )}

          {/* TAB YÊU THÍCH */}
          {activeTab === 'wishlist' && (
            wishlist.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Chưa có sản phẩm yêu thích.</p>
            ) : (
              wishlist.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <div>
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <div className="text-blue-600 font-bold text-sm">{formatPrice(item.price)}</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => addToCart(item)} className="p-2 bg-blue-100 text-blue-600 rounded-lg"><ShoppingBag size={16}/></button>
                    <button onClick={() => toggleWishlist(item)} className="p-2 bg-pink-100 text-pink-600 rounded-lg"><Heart size={16}/></button>
                  </div>
                </div>
              ))
            )
          )}

          {/* TAB ĐÃ XEM */}
          {activeTab === 'recent' && (
            recentlyViewed.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Chưa có lịch sử xem.</p>
            ) : (
              recentlyViewed.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 opacity-80">
                  <Clock size={16} className="text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <div className="text-gray-500 text-xs">{formatPrice(item.price)}</div>
                  </div>
                </div>
              ))
            )
          )}
        </div>

        {activeTab === 'cart' && cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium">Tổng tiền:</span>
              <span className="text-xl font-bold text-blue-600">{formatPrice(totalAmount)}</span>
            </div>
            <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all active:scale-95">
              Thanh Toán
            </button>
          </div>
        )}
      </div>
    </>
  );
}