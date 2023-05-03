import { useState } from 'react';
import Image from 'next/image';
import { Socials } from '@/components/common/Socials/Socials';
import { Container } from '@/components/layout/Container/Container';
import { DomainLogo } from '@/components/layout/DomainLogo/DomainLogo';
import Phone from '@/media/icons/phone.svg'
import { TopMenu } from '@/components/common/TopMenu/TopMenu';
import { BurgerMenu } from '@/components/layout/BurgerMenu/BurgerMenu';
import useWindowSize from '@/assets/hooks/useWindowSize';
import '@/assets/icons/fontawesome.ts';

interface IHeader {
  topMenu: Menu;
  socialMenu: Menu;
  phone: string;
}
export const Header = ({topMenu, socialMenu, phone}: IHeader) => {
  const [ showMenu, setShowMenu ] = useState(false);
  const { width: windowWidth } = useWindowSize();

  const isMobile = windowWidth ? windowWidth < 768 : false;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <header className="root">
      <Container>
        <div className="grid grid-cols-[1fr_2fr_1fr] md:grid-cols-3 text-center h-16 items-center">
          <div className="social_block hidden transition-all ease-out duration-75 md:block">
            <Socials items={socialMenu}/>
          </div>
          <div className="burger_menu block transitionall ease-in duration-75 md:hidden">
            <BurgerMenu isMobile={isMobile} showMenu={showMenu} toggleMenu={toggleMenu}/>
          </div>
          <div className="logotype">
            <DomainLogo />
          </div>
          <div className="phone">
            <div className="flex flex-row items-center justify-end">
              <a href={`tel:${phone}`} className="border-[1px] border-black font-montserrat font-bold text-sm md:py-[10px] md:px-[30px] max-w-fit rounded-full md:rounded-3xl p-2">
                <span className="hidden md:block">{phone}</span>
                <Image className="block md:hidden" src={Phone} alt="Phone number"/>
              </a>
            </div> 
          </div>
        </div>
      </Container>
      <Container>
        <div className="menu max-w-[770px] mx-auto md:my-10">
          <TopMenu items={topMenu} isMobile={isMobile} showMenu={showMenu} toggleMenu={toggleMenu}/>
        </div>
      </Container>
    </header>
  )
}