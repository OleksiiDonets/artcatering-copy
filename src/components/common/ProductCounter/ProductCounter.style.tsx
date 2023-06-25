import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CounterWrap = styled.div`
  display: grid;
  grid-template-columns: 24px 30px 24px;
`;
export const CounterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border: 1px solid #C4C4C4;
  border-radius: 50%;
  background-color: #FFFFFF;
  cursor: pointer;
`;

export const CounterValue = styled.input`
  padding:4px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  border: none;
  outline: none;
  pointer-events: none;
  &::-webkit-inner-spin-button {
    appearance: none;
  }
`;

export const CounterIcon = styled(FontAwesomeIcon)`
  color: #C4C4C4;
  font-size: 14px;
  font-weight: 300;
`;
