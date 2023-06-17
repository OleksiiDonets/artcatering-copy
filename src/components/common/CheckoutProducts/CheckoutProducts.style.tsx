import styled from 'styled-components';

export const ProductsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-top:1px solid #C7D1D0;
  border-bottom: 1px solid #C7D1D0;
  padding: 22px 15px;
`;

export const ProductsItem = styled.div`
  display: grid;
  grid-template-columns: 100px repeat(5, minmax(100px, 1fr));
  column-gap: 10px;
  align-items: center;
`;

export const ItemImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 87px;
  height: 87px;
  img{
    width: auto;
    height: 100%;
  }
`;

export const ItemName = styled.div`
  font-size: 18px;
  color: var(--gray-color);
  h4{
    font-weight: 500;
  }
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  color: #000000;
  font-weight: 500;
  line-height: .9;
`;
