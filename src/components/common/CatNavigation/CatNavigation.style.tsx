import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 2.5rem 0;
`;

export const Title = styled.div`
  font-family: var( --font-montserrat );
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: -1.05px;
  color: #000000;
  h3{
    font-size: 30px;
    line-height: 1.55;
  }
`;

export const CatList = styled.nav`
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:15px;
    list-style-type: none;
    padding: 0;
  }
`;

export const CatItem = styled.li`
  a{
    display: block;
    border: 1px solid #000000;
    border-radius: 30px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    padding: 0 35px;
    font-family: var(--font-montserrat);
    font-size: 16px;
    line-height: 3;
    font-weight: 500;
    &:hover {
      background-color: #f6dddf;
      border-color: #f6dddf;
    }
  }
`;