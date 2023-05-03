import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IBurgerMenu {
  isMobile: boolean;
  showMenu: boolean;
  toggleMenu: () => void;
}
export const BurgerMenu = ({isMobile, showMenu , toggleMenu}: IBurgerMenu) => {
  if(isMobile){
    return (
      <button type="button" onClick={toggleMenu} className="flex content-center items-center mr-2">
        {showMenu ? (
          <FontAwesomeIcon color='#000000' icon="xmark" size='2x'  className="transition-all ease-in"/>
        ) : (
          <FontAwesomeIcon color='#000000' icon="bars" size='lg' className="transition-all ease-in"/>
        )}
      </button>
    )
  }
  return null
}