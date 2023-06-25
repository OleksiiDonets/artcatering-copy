'use client';
import { useContext, useMemo, useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_CART, GET_ORDER_DATA } from '@/assets/queries/cart/cart';
import { CheckoutProducts } from '@/components/common/CheckoutProducts/CheckoutProducts';
import { RadioGroup } from '@/components/common/RadioGroup/RadioGroup';
import { OrderContainer } from '@/components/layout/OrderPage/OrderPage.style';
import { CartContext } from '@/lib/store/CartProvider';
import { IOrderMethods, IPaymentMethod, IShippingMethod, TRadios } from '@/types/common';

//TODO: move this function to a separate file 
const normalizeObjects = (shippingArr?:IShippingMethod[], paymentArr?: IPaymentMethod[]) => {
  if(shippingArr && paymentArr) {

    const normalShipping:TRadios[] | undefined = shippingArr?.map( item => {
      return {
        title: item.label,
        methodId: item.methodId
      }
    });
    const normalPayment:TRadios[] | undefined = paymentArr?.map( item => {
      return {
        title: item.title,
        description: item.description,
        methodId: item.id
      }
    });

    return {
      shipping: normalShipping,
      payment: normalPayment
    }
  }
};

export const OrderPage = () => {
  const [normalizedData, setNormalizedData] = useState<{shipping:TRadios[], payment:TRadios[]} | undefined>();
  const { cartValue } = useContext(CartContext);
  const { data, loading } = useQuery<IOrderMethods>(GET_ORDER_DATA,{
    notifyOnNetworkStatusChange: true,
  });
  useEffect(() => {
    if(!loading){
      const datas = normalizeObjects(data?.cart.availableShippingMethods[0].rates, data?.paymentGateways.nodes);
      setNormalizedData(datas)
    }
  },[loading])
  return (
    <OrderContainer>
      <div> Order form </div>
      <RadioGroup type={'shipping'} items={normalizedData?.shipping} inital={'free_shipping'}/>
      <RadioGroup type={'payment'} items={normalizedData?.payment} inital={'cod'}/>
      <CheckoutProducts products={ cartValue?.contents.nodes } />
    </OrderContainer>
  )
}
