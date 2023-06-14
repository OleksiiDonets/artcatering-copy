import { Button, Icon } from '@/components/layout/BurgerMenu/BurgerMenu.style';
interface IBurgerMenu {
  isMobile: boolean;
  showMenu: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu = ({isMobile, showMenu , toggleMenu}: IBurgerMenu) => {
  if(isMobile){
    return (
      <Button type="button" onClick={toggleMenu}>
        {showMenu ? (
          <Icon color='#000000' icon="xmark" size='2x'/>
        ) : (
          <Icon color='#000000' icon="bars" size='lg'/>
        )}
      </Button>
    )
  }
  return null
}