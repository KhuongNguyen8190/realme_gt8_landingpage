"use client";

import { useCartStore } from "@/store/useCartStore";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price);
  };

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sửa đổi: Thêm invisible và pointer-events-none khi đóng để không chặn click trên Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white dark:bg-gray-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold">Giỏ Hàng</h2>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Chưa có sản phẩm nào.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border shrink-0">
                   <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 text-xs font-bold">GT8</div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">{item.name}</h3>
                  <div className="text-blue-600 dark:text-blue-400 font-bold mt-1 text-sm">{formatPrice(item.price)}</div>
                  <div className="text-gray-500 text-xs mt-1">Số lượng: {item.quantity}</div>
                </div>
                <button onClick={() => removeItem(item.id)} className="p-2 text-red-400 hover:text-red-600 rounded-full shrink-0">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Tổng tiền:</span>
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{formatPrice(totalAmount)}</span>
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