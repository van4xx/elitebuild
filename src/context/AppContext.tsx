import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
  isHit?: boolean;
  discount?: number;
  inStock: boolean;
}

interface AppContextType {
  cart: Product[];
  favorites: Product[];
  comparison: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: number) => void;
  isInCart: (productId: number) => boolean;
  isInFavorites: (productId: number) => boolean;
  isInComparison: (productId: number) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [comparison, setComparison] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      if (!prev.find(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const addToFavorites = (product: Product) => {
    setFavorites(prev => {
      if (!prev.find(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites(prev => prev.filter(item => item.id !== productId));
  };

  const addToComparison = (product: Product) => {
    setComparison(prev => {
      if (!prev.find(item => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromComparison = (productId: number) => {
    setComparison(prev => prev.filter(item => item.id !== productId));
  };

  const isInCart = (productId: number) => cart.some(item => item.id === productId);
  const isInFavorites = (productId: number) => favorites.some(item => item.id === productId);
  const isInComparison = (productId: number) => comparison.some(item => item.id === productId);

  return (
    <AppContext.Provider value={{
      cart,
      favorites,
      comparison,
      addToCart,
      removeFromCart,
      addToFavorites,
      removeFromFavorites,
      addToComparison,
      removeFromComparison,
      isInCart,
      isInFavorites,
      isInComparison,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 