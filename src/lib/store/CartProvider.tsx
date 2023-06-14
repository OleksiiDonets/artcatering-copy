'use client';
import { useState, useEffect, createContext, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

interface ICartProvider {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
};

interface Image {
  sourceUrl?: string;
  srcSet?: string;
  title: string;
}

export interface Product {
  cartKey: string;
  name: string;
  qty: number;
  price: number;
  totalPrice: string;
  image: Image;
  productId: number;
}

export interface RootObject {
  products: Product[];
  totalProductsCount: number;
  totalProductsPrice: number;
}

export type TRootObject = RootObject | string | null | undefined;

export type TRootObjectNull = RootObject | null | undefined;

interface ICartContext {
  cart: RootObject | null | undefined;
  setCart: React.Dispatch<React.SetStateAction<TRootObjectNull>>;
}

const CartState = {
  cart: null,
  setCart: () => {},
};

export const CartContext = createContext<ICartContext>(CartState);

export const CartProvider = ({ children }:ICartProvider) => {
  const [ cart, setCart ] = useState<RootObject | null>();

    useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const localCartData:string | null = localStorage.getItem('woocommerce-cart');

    if (localCartData) {
      const cartData: RootObject = JSON.parse(localCartData);
      setCart(cartData);
    }
  }, []);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      { children }
    </CartContext.Provider>
  )

}