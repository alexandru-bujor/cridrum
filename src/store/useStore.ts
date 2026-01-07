import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  nameRo: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discount?: number;
  freeDelivery?: boolean;
  bonusPoints?: number;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  currency: 'MDL' | 'EUR' | 'USD';
  language: 'RO' | 'RU' | 'EN';
  city: string;
  
  // Cart actions
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Wishlist actions
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Settings
  setCurrency: (currency: 'MDL' | 'EUR' | 'USD') => void;
  setLanguage: (language: 'RO' | 'RU' | 'EN') => void;
  setCity: (city: string) => void;
  
  // Computed
  cartTotal: () => number;
  cartCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      currency: 'MDL',
      language: 'RO',
      city: 'Chișinău',
      
      addToCart: (product) => {
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        });
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
          ).filter((item) => item.quantity > 0),
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      
      toggleWishlist: (product) => {
        set((state) => {
          const exists = state.wishlist.find((item) => item.id === product.id);
          if (exists) {
            return { wishlist: state.wishlist.filter((item) => item.id !== product.id) };
          }
          return { wishlist: [...state.wishlist, product] };
        });
      },
      
      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId);
      },
      
      setCurrency: (currency) => set({ currency }),
      setLanguage: (language) => set({ language }),
      setCity: (city) => set({ city }),
      
      cartTotal: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      
      cartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'yes-flowers-store',
    }
  )
);

// Currency conversion rates (approximate)
export const currencyRates = {
  MDL: 1,
  EUR: 0.052,
  USD: 0.056,
};

export const currencySymbols = {
  MDL: 'lei',
  EUR: '€',
  USD: '$',
};

export const formatPrice = (price: number, currency: 'MDL' | 'EUR' | 'USD') => {
  const converted = price * currencyRates[currency];
  const symbol = currencySymbols[currency];
  
  if (currency === 'MDL') {
    return `${converted.toFixed(0)} ${symbol}`;
  }
  return `${symbol}${converted.toFixed(2)}`;
};
