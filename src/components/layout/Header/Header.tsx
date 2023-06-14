'use client';
import { useState } from 'react';
import Image from 'next/image';
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
import { TopHeaderContainer, SocContainer, PhoneContainer, PhoneLink, BurgerContainer, MenuContainer} from '@/components/layout/Header/Header.style';
import { GET_MENUS } from '@/assets/queries/menus/menus';
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

export const Header = () => {
  const pathname = usePathname();
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
        <TopHeaderContainer>
          <SocContainer>
            <Socials items={menuSocItems}/>
          </SocContainer>
          <BurgerContainer>
            <BurgerMenu isMobile={isMobile} showMenu={showMenu} toggleMenu={toggleMenu}/>
          </BurgerContainer>
          <div>
            <DomainLogo isHome={pathname === '/'}/>
          </div>
          <div className="phone">
            <PhoneContainer>
              <PhoneLink href={`tel:${phoneNumber}`}>
                <span>{phoneNumber}</span>
                <Image src={Phone} alt="Phone icon"/>
              </PhoneLink>
            </PhoneContainer> 
          </div>
        </TopHeaderContainer>
      </Container>
      <Container>
        <MenuContainer $showMenu={showMenu}>
          <TopMenu items={menuHeadItem} isMobile={isMobile} showMenu={showMenu} toggleMenu={toggleMenu}/>
        </MenuContainer>
      </Container>
    </header>
  )
}