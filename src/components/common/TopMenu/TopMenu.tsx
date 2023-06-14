import {TopNav, TopNavList, TopNavItem, TopNavLink} from '@/components/common/TopMenu/TopMenu.style';
import { Menu } from "@/types/common";

interface ITopMenu {
  items: Menu;
  isMobile: boolean;
  showMenu: boolean;
  toggleMenu: () => void;
};



export const TopMenu = ({items, isMobile, showMenu, toggleMenu}: ITopMenu) => {
  const toggleLink = () => {
    toggleMenu();
  }
  return (
    <TopNav $showMenu={showMenu} $isMobile={isMobile}>
     <TopNavList>
      {
        items.map(item => (
          <TopNavItem key={item?.node.id} onClick={toggleLink}>
            <TopNavLink href={{ pathname: `${item.node.uri}` }} prefetch={ item.node.uri == '/foodbox/' ? true : false}>
              <span>{item?.node.label}</span>
            </TopNavLink>
          </TopNavItem>
        ))
      } 
     </TopNavList> 
    </TopNav>
  )
}