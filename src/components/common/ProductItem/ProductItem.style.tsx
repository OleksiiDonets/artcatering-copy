import styled from 'styled-components';

export const ItemWrap = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  img {
    display: block;
    width: auto;
    height: 355px;
    margin: 0 auto;
  }
`;

export const ItemName = styled.div`
  width: 100%;
  font-family: var(--font-playfair);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: left;
`;

export const ItemDescription = styled.div`
  line-height: 1.55;
  font-weight: 300;
  max-height: 95px;
`;

export const ItemButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 20px 0 0;
  grid-column-gap: 10px;
`;

const ItemButton = styled.button`
  border: none;
  outline: none;
  height: 45px;
  font-size: 14px;
  padding: 0;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ItemDetail = styled(ItemButton)`
  background-color:#ffebb5;
  &:hover {
    background-color:#f3cbce;
  }
`;
export const ItemBuy = styled(ItemButton)`
  background-color: #f6dddf;
  &:hover {
    background-color:#f3cbce;
  }
`;

