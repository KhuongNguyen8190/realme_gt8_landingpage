"use client";

import { useStore } from "@/store/useStore";
import { Heart } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function WishlistButton() {
  const { toggleWishlist, addRecentlyViewed, wishlist } = useStore();
  
  const productInfo = { id: "realme-gt8-pro", name: "Realme GT8 Pro", price: 15990000 };
  const isWishlisted = wishlist.some(i => i.id === productInfo.id);

  useEffect(() => {
    addRecentlyViewed(productInfo);
  }, [addRecentlyViewed]);

  const handleWishlist = () => {
    toggleWishlist(productInfo);
    toast.success(isWishlisted ? "Đã bỏ yêu thích" : "Đã thêm vào yêu thích!", { icon: '❤️' });
  };

  return (
    <button 
      onClick={handleWishlist}
      aria-label={isWishlisted ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
      className={`h-full px-4 sm:px-5 flex items-center justify-center rounded-xl border-2 transition-all active:scale-95 ${
        isWishlisted 
          ? 'border-pink-500 bg-pink-50 text-pink-500 dark:bg-pink-900/30' 
          : 'border-gray-200 dark:border-gray-800 text-gray-400 hover:border-pink-300 hover:text-pink-400 bg-white dark:bg-gray-900'
      }`}
    >
      <Heart size={20} className={isWishlisted ? "fill-pink-500" : ""} />
    </button>
  );
}