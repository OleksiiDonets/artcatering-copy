import styled from 'styled-components';

export const OrderContainer = styled.section`
  @media screen and ( min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 30px 60px;
    column-gap: 100px;
  }
`;
