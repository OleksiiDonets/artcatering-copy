import { CheckoutProductItem } from '@/components/common/CheckoutProducts/CheckoutProductItem';
import { ProductsTable } from '@/components/common/CheckoutProducts/CheckoutProducts.style';
import { CartProduct } from '@/lib/store/CartProvider';

interface ICheckoutProducts {
  products?: CartProduct[];
}

export const CheckoutProducts = ({ products }:ICheckoutProducts) => {
  return (
    <ProductsTable>
      {
        products?.map( item => (
          <CheckoutProductItem key={item.key} item={item} />
        ))
      }
    </ProductsTable>
  )
}