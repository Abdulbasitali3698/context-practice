"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface CartContextType {
  products: Product[];
  addToCart: (productId: number, productName: string) => void;
  removeFromCart: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const initialCart = (): Product[] => {
    // Get stored cart from local storage
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [products, setProducts] = useState<Product[]>(initialCart);

  useEffect(() => {
    // Update local storage when products change
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  const addToCart = (productId: number, productName: string) => {
    const existingProduct = products.find(product => product.id === productId);
    if (existingProduct) {
      increaseProductQuantity(productId);
    } else {
      setProducts(prevProducts => [...prevProducts, { id: productId, name: productName, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const increaseProductQuantity = (productId: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseProductQuantity = (productId: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: Math.max(1, product.quantity - 1) } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart, increaseProductQuantity, decreaseProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
