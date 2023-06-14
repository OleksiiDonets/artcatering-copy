import styled from "styled-components";
import Link from "next/link";

export const MenuContainer = styled.div<{$showMenu: boolean}>`
  max-width: 770px;
  margin: 0 auto;
  position: relative;
  left: ${props => props.$showMenu ? '-5%': '-105%'};
  width: 100%;
  box-shadow: 1px 2px 14px 0px rgba(0,0,0, .1);
  border-radius: 5px;
  transition: all  .3s ease-in;
  @media screen and (min-width: 768px){
    margin: 2.5rem auto;
    left: 0;
    box-shadow: none;
  }
`;
export const TopHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  height: 4rem;
  align-items: center;
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
export const SocContainer = styled.div`
  display: none;
  transition: all .75s ease-out;
  @media screen and ( min-width: 768px){
    display: block;
  }
`;
export const BurgerContainer = styled.div`
  display:block;
  transition: all .75s ease-in;
  @media screen and (min-width: 768px){
    display: none;
  }
`;
export const PhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const PhoneLink = styled(Link)`
  border: 1px solid #000000;
  font-weight: 700;
  font-family: var(--font-montserrat);
  font-size: 0.875rem;
  line-height: 1.25rem;
  max-width: fit-content;
  border-radius: 50%;
  padding: 0.5rem;
  height: 42px;
  span{
    font-weight: 700;
    display: none;
  }
  @media screen and (min-width: 768px){
    border-radius: 1.5rem;
    padding: 10px 30px;
    span{
      display: inline-block;
    }
    img{
      display: none;
    }
  }
`;