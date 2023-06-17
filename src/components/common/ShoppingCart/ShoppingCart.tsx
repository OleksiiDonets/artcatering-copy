'use client';
import { useContext } from "react";
import { CartContext } from "@/lib/store/CartProvider";
import { CartWrapper, CartContent, CartCount } from "./ShoppingCart.style";

export const ShoppingCart = () => {
  const { cartValue } = useContext(CartContext);
  if(!cartValue?.contents.itemCount) return <></>
  return ( 
    <CartWrapper>
      <CartContent>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> 
          <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M44 18h10v45H10V18h10z"></path> 
          <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"></path>
        </svg>
      </CartContent>
      <CartCount>{cartValue?.contents.itemCount}</CartCount>
    </CartWrapper> 
  )
}