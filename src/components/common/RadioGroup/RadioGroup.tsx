import { useState } from 'react';
import { TRadios } from '@/types/common';
import { RadioWrap, RadioButton, RadioLabel, RadioText } from '@/components/common/RadioGroup/RadioGroup.style';

const Descriptions:{[index: string]: string} = {
  free_shipping:'м.Львів, вул. В.Великого, 2',
  local_pickup: 'Безкоштовно в межах м.Львів'
};

interface IRadioGroup {
  inital?: string;
  type: 'payment' | 'shipping';
  items?: TRadios[];
};

export const RadioGroup = ({items, type, inital}: IRadioGroup) => {
  const [selected, setSeleted ] = useState(inital);
  
  const onChangeHandler = ( event ) => {
    setSeleted(event.target.value)
  }
  return (
    <RadioWrap>
      {
        items?.map((item) => (
          <RadioLabel key={item.methodId}>
            <RadioButton 
              type='radio' 
              name={type} 
              value={item.methodId} 
              checked={selected === item.methodId}
              onChange={onChangeHandler}
            />
            <RadioText>
              <span>{ item.title }</span>
              <span>{ type == 'shipping' ? Descriptions[item.methodId]: item.description}</span>
            </RadioText>
          </RadioLabel>
        ))
      }
      
    </RadioWrap>
  )
}