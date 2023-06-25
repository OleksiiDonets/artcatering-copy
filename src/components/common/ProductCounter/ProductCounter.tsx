import { useState } from 'react';
import { CounterWrap, CounterButton, CounterValue, CounterIcon } from '@/components/common/ProductCounter/ProductCounter.style';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import useUpdateCart from '@/assets/hooks/useUpdateCart';

interface IProductCounter {
  count: number;
  cartKey: string;
}

export const ProductCounter = ({ count, cartKey }: IProductCounter) => {
  const [ productCount, setProductCount ] = useState(count);
  const { handleUpdateCart } = useUpdateCart(cartKey)


  const countHandler = (operator:string) => {
    if(operator === 'dec' && productCount > 1) {
        setProductCount(productCount - 1);
        handleUpdateCart(productCount - 1);
    }else if(operator === 'inc' && productCount >= 1){
      setProductCount( productCount + 1);
      handleUpdateCart(productCount + 1);
    }
  }
  
  return (
    <CounterWrap>
      <CounterButton type="button" onClick={() => countHandler('inc')}>
        <CounterIcon icon={faPlus}/>
      </CounterButton>
      <CounterValue type="number" value={productCount} />
      <CounterButton type="button" onClick={() => countHandler('dec')}>
        <CounterIcon icon={faMinus}/>
      </CounterButton>
    </CounterWrap>
  )
}