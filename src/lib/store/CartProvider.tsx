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
interface ProductImage {
  title: string;
  altText: string;
  sourceUrl: string;
}
export interface CartProduct {
  key: string;
  quantity: number;
  subTotal: string;
  total: string;
  discountTax?: string;
  discountTotal?: string;
  product: {
    node:{
      databaseId: number;
      id: string;
      name: string;
      uri: string;
      price: string;
      image: ProductImage;
    };
  }
}

export interface CartObject {
  contents:{
    itemCount: number;
    nodes: CartProduct[];
  };
  subTotal: string;
  discountTax: string;
  discountTotal: string;
  total:string;
}

export type TCartObject = CartObject | string | null | undefined;

export type TCartObjectNull = CartObject | null | undefined;

interface ICartContext {
  cartValue: CartObject | null | undefined;
  setCartValue: React.Dispatch<React.SetStateAction<TCartObjectNull>>;
}

const CartState = {
  cartValue: null,
  setCartValue: () => {},
};

export const CartContext = createContext<ICartContext>(CartState);

export const CartProvider = ({ children }:ICartProvider) => {
  const [ cartValue, setCartValue ] = useState<CartObject | null>();

    useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const localCartData:string | null = localStorage.getItem('woocommerce-cart');

    if (localCartData) {
      const cartData:CartObject = JSON.parse(localCartData);
      setCartValue(cartData);
    }
  }, []);

  return (
    <CartContext.Provider value={{cartValue, setCartValue}}>
      { children }
    </CartContext.Provider>
  )

}