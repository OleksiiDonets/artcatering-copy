'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Socials } from '@/components/common/Socials/Socials';
import { Container } from '@/components/layout/Container/Container';
import { DomainLogo } from '@/components/layout/DomainLogo/DomainLogo';
import Phone from '@/media/icons/phone.svg'
import { TopMenu } from '@/components/common/TopMenu/TopMenu';
import { BurgerMenu } from '@/components/layout/BurgerMenu/BurgerMenu';
import useWindowSize from '@/assets/hooks/useWindowSize';
import '@/assets/icons/fontawesome.ts';
import { Menu } from '@/types/common';
import styled from 'styled-components';
import { GET_MENUS } from '@/assets/queries/menus';
import { usePathname } from 'next/navigation';
interface IHeader {
  headerMenu:{
    edges: Menu;
  }
  socialMenu: {
    edges: Menu;
  };
  phoneNumber: {
    contacts: {
      phoneNumber: string;
    }
  }
}
const StyledMenuContainer = styled.div<{$showMenu: boolean}>`
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
const StyledTopHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  height: 4rem;
  align-items: center;
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
const StyledSocContainer = styled.div`
  display: none;
  transition: all .75s ease-out;
  @media screen and ( min-width: 768px){
    display: block;
  }
`;
const StyledBurgerContainer = styled.div`
  display:block;
  transition: all .75s ease-in;
  @media screen and (min-width: 768px){
    display: none;
  }
`;
const StyledPhoneContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const StyledPhoneLink = styled(Link)`
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
export const Header = () => {
  const pathname = usePathname();
  const clearPath = pathname?.slice(1, pathname.length);

  const { data:{
    socialMenu:{
      edges: menuSocItems
    },
    headerMenu: {
      edges: menuHeadItem
    },
    phoneNumber: {
      contacts: {
        phoneNumber
      }
    }
  } } = useSuspenseQuery<IHeader>(GET_MENUS);
  const [ showMenu, setShowMenu ] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth ? windowWidth < 768 : false;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <header className="root">
      <Container>
        <StyledTopHeaderContainer>
          <StyledSocContainer>
            <Socials items={menuSocItems}/>
          </StyledSocContainer>
          <StyledBurgerContainer>
            <BurgerMenu isMobile={isMobile} showMenu={showMenu} toggleMenu={toggleMenu}/>
          </StyledBurgerContainer>
          <div>
            <DomainLogo />
          </div>
          <div className="phone">
            <StyledPhoneContainer>
              <StyledPhoneLink href={`tel:${phoneNumber}`}>
                <span>{phoneNumber}</span>
                <Image src={Phone} alt="Phone icon"/>
              </StyledPhoneLink>
            </StyledPhoneContainer> 
          </div>
        </StyledTopHeaderContainer>
      </Container>
      <Container>
        <StyledMenuContainer $showMenu={showMenu}>
          <TopMenu items={menuHeadItem} isMobile={isMobile} showMenu={showMenu} toggleMenu={toggleMenu}/>
        </StyledMenuContainer>
      </Container>
    </header>
  )
}