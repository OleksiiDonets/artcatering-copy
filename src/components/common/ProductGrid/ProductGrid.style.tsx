import styled from "styled-components";

export const GridWrap = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 50px 0;
`;

export const Title = styled.div`
  h3{
    font-size: 36px;
    font-weight: 600;
    text-transform: capitalize;
    text-align: left;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 40px;

`;