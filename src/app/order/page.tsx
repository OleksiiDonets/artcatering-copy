'use client';
import { Container } from '@/components/layout/Container/Container';
import { useContext } from 'react';
import { CartContext, CartObject } from '@/lib/store/CartProvider';
import { OrderPage } from '@/components/layout/OrderPage/OrderPage';

export default function Order(){
  const { cartValue } = useContext(CartContext);

  return (
    <OrderPage data={ cartValue } />
  )
}