import { useContext, useState } from 'react';
import { useSuspenseQuery,  } from '@apollo/experimental-nextjs-app-support/ssr';
import { useMutation, useQuery } from '@apollo/client';

import { CartContext } from '@/lib/store/CartProvider';
import { GET_CART, ADD_TO_CART } from '@/assets/queries/cart/cart';

import { v4 as uuidv4} from 'uuid';
import { SimpleProduct } from '@/types/common';

interface IImage {
  __typename: string;
  id: string;
  uri: string;
  title: string;
  srcSet: string;
  sourceUrl: string;
}
export interface IProduct {
  id: string;
  databaseId: number;
  uri: string;
  image: IImage;
  name: string;
  salePrice?: string;
  regularPrice: string;
  price: string;
  stockQuantity: number;
}

export interface IProductRootObject {
  product: SimpleProduct;
}
const useAddToCart = (product: SimpleProduct) => {
  const { setCart } = useContext(CartContext);
  const [requestError, setRequestError] = useState(false);

  const productQueryInput = {
    clientMutationId:uuidv4(),
    productId: product.databaseId,
  }

  const { data, refetch } = useQuery(GET_CART,{
   notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      if(typeof window !== 'undefined') {
        localStorage.setItem('woocommerce-cart', JSON.stringify(data));
        setCart(data);
      }

    }
  });
  console.log("🚀 ~ file: useAddToCart.ts:47 ~ useAddToCart ~ data:", data)

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