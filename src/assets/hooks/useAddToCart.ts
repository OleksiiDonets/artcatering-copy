import { useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CartContext } from '@/lib/store/CartProvider';
import { GET_CART, ADD_TO_CART } from '@/assets/queries/cart/cart';
import { v4 as uuidv4} from 'uuid';
import { SimpleProduct } from '@/types/common';

const useAddToCart = (product: SimpleProduct) => {
  const { setCartValue } = useContext(CartContext);
  const [requestError, setRequestError] = useState(false);

  const productQueryInput = {
    clientMutationId:uuidv4(),
    productId: product.databaseId,
  }

  const { data, refetch } = useQuery(GET_CART,{
   notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if(typeof window !== 'undefined') {
        localStorage.setItem('woocommerce-cart', JSON.stringify(data.cart));
        setCartValue(data.cart);
      }

    }
  });

  const [addToCart, {loading: addToCartLoading}] = useMutation(ADD_TO_CART,{
    variables: {
      input: productQueryInput
    },
    onCompleted: () => {
      refetch();
    },
    onError: () => {
      setRequestError(true)
    }
  });

  const handleAddToCart = () => {
    addToCart();
    setTimeout(() => {
      refetch();
    }, 2000);
  }
  return {
    handleAddToCart
  }
}
export default useAddToCart;