import { useContext, useState } from 'react';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid'
import { CartContext } from '@/lib/store/CartProvider';
import { GET_CART, UPDATE_CART } from '@/assets/queries/cart/cart';
import { CartProduct, TUpdatedItems } from '@/types/common';

const updateItem = (
  products: CartProduct[],
  newQty: number,
  key: string
) => {
  const updatedItems:TUpdatedItems = [];

  products.forEach(( product )=> {
    if( product.key === key ){
      updatedItems.push({
        key: product.key,
        quantity: newQty,
      });
    }else{
      updatedItems.push({
        key: product.key,
        quantity: product.quantity,
      });
    }
  });
  return updatedItems;
};
 
//Hook for updating cart 

const useUpdateCart = (
  cartKey: string,
) => {
  const { setCartValue } = useContext(CartContext);

  const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange:true,
    onCompleted: () => {
      localStorage.setItem('woocommerce-cart', JSON.stringify(data.cart));
      setCartValue(data.cart);
    },
  });

  const [ updateCart, { loading:updateStatus}] = useMutation(UPDATE_CART, {
    onCompleted: () => {
      refetch();
      setTimeout(() => {
        refetch();
      }, 3000);
    }
  });

  const handleUpdateCart = (
    quantity: number
  ) => {
    const updatedItems = updateItem(data.cart.contents.nodes, quantity, cartKey);

    updateCart({
      variables:{
        input: {
          clientMutationId: uuidv4(),
          items:updatedItems
        }
      }
    })
  };
  const handleRemoveItem = () => {
    const qty = 0;
    const updatedItems = updateItem(data.cart.contents.nodes, qty, cartKey)
    updateCart({
      variables:{
        input: {
          clientMutationId: uuidv4(),
          items:updatedItems
        }
      }
    });
  }
  return {
    handleUpdateCart,
    handleRemoveItem
  }
};

export default useUpdateCart;