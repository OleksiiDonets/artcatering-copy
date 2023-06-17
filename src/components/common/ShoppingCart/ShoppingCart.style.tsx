import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction:column;
  background-color: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);
  position: fixed;
  top: 150px;
  right: 20px;
  width: 80px;
  height: 80px;
`;

export const CartContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  svg{
    padding:18px 20px 22px; 
    stroke: #000000;
  }
`;

export const CartCount = styled.div`
  position:absolute;
  right:0;
  bottom: -13%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: red;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  line-height: 31px;
  padding: 0 8px;
  text-align: center;
`;