"use client";

import { useCartStore } from "@/store/useCartStore";
import { X, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Hydration fix for Zustand persist
  useEffect(() => {
    setMounted(true);
  }, []);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Format currency in VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white dark:bg-gray-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold">Giỏ Hàng Của Bạn</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800"
              >
                {/* Product Thumbnail Placeholder */}
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-100 dark:border-gray-700 shrink-0">
                   <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 text-xs font-bold">
                      GT8
                   </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {item.name}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-bold mt-1 text-sm">
                    {formatPrice(item.price)}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    Số lượng: {item.quantity}
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                  title="Xóa sản phẩm"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer (Total & Checkout) */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Tổng Tạm Tính:
              </span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {formatPrice(totalAmount)}
              </span>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all active:scale-95">
              Thanh Toán Ngay
            </button>
          </div>
        )}
      </div>
    </>
  );
}