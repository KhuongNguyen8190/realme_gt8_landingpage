import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface AppState {
  cart: CartItem[];
  wishlist: Product[];
  recentlyViewed: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  toggleWishlist: (product: Product) => void;
  addRecentlyViewed: (product: Product) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      recentlyViewed: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),

      toggleWishlist: (product) =>
        set((state) => {
          const exists = state.wishlist.some((i) => i.id === product.id);
          if (exists) {
            return { wishlist: state.wishlist.filter((i) => i.id !== product.id) };
          }
          return { wishlist: [...state.wishlist, product] };
        }),

      addRecentlyViewed: (product) =>
        set((state) => {
          const exists = state.recentlyViewed.some((i) => i.id === product.id);
          if (exists) return state; // Nếu đã có thì không thêm trùng
          // Giữ lại tối đa 5 sản phẩm xem gần nhất
          return { recentlyViewed: [product, ...state.recentlyViewed].slice(0, 5) };
        }),
    }),
    {
      name: "gt8-storage", // Tên key lưu trong localStorage
    }
  )
);