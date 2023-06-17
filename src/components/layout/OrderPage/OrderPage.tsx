import { CheckoutProducts } from '@/components/common/CheckoutProducts/CheckoutProducts';
import { OrderContainer } from '@/components/layout/OrderPage/OrderPage.style';
import { CartObject } from '@/lib/store/CartProvider';

interface IOrderPage {
  data?: CartObject | null;
}

export const OrderPage = ({ data }: IOrderPage) => {
  return (
    <OrderContainer>
      <div> Order form </div>
      <CheckoutProducts products={ data?.contents.nodes } />
    </OrderContainer>
  )
}