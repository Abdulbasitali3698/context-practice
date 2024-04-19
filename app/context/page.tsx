
"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface product {
  id:number;
  name:string;
  quantity:number;
}

interface CartContextType {
  products:product[];
  addToCart:(productId:number,productName:string)=>void;
  removeFromCart:(produtId:number)=>void;
  increaseProductQuantity:(productId:number)=>void;
  decreaseProductQuantity:(productId:number)=>void;
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
  const[products,setProducts]=useState<product[]>([]);


  const addToCart = (productId:number,productName:string)=>{
    const existingProduct=products.find(product=>product.id===productId);
    if(existingProduct){
      increaseProductQuantity(productId);
    }
    else{
      setProducts(prevProducts=>[...prevProducts,{id:productId, name:productName, quantity:1 }])
    };
  };
  const removeFromCart = (productId:number)=>{
    setProducts(prevProducts=>prevProducts.filter(product=>product.id !== productId));
  };
  const increaseProductQuantity = (productId:number)=>{
    setProducts(prevProducts=>
      prevProducts.map(product=>
        product.id === productId ?{...product, quantity:product.quantity +1}:product
      )
    );
  };
  const decreaseProductQuantity = (productId:number)=>{
    setProducts(prevProducts=>
      prevProducts.map(product=>
        product.id === productId ?{...product, quantity: Math.max(0,product.quantity -1)}:product
      )
    );
  };




  return (
    <CartContext.Provider value={{ products, addToCart, removeFromCart, increaseProductQuantity, decreaseProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


