import Link from "next/link";
import classNames from "classnames";
import styled from 'styled-components';
import { Menu } from "@/types/common";

interface ITopMenu {
  items: Menu;
  isMobile: boolean;
  showMenu: boolean;
  toggleMenu: () => void;
};

const StyledTopNav = styled.nav<{$showMenu?: boolean, $isMobile?: boolean}>`
  display: grid;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: #FFFFFF;
  width: 100%;
  transition: all ease-in-out;
  left: 0px;
  /* left: ${props => !props.$showMenu && !props.$isMobile ? '0px': '-100%'}; */
  @media screen and (min-width: 768px){
    height: auto;
    position: relative;
  }
`;
const StyledTopNavList = styled.ul`
  display: grid;
  grid-row: auto;
  height: calc(100vh - 25rem);
  padding: 1.25rem;
  font-family: var(--font-montserrat);
  color: #000000;
  list-style: none;
  @media screen and (min-width: 768px){
    height: auto;
    grid-auto-flow: column;
    padding:0;
  }
`;

const StyledTopNavItem = styled.li`
  text-align: left;
  @media screen and ( min-width: 768px){
    text-align: center;
  }
`;
const StyledTopNavLink = styled(Link)<{$active?: boolean}>`
  display: inline-block;
  font-family: var(--font-montserrat);
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  &:after{
    content: "";
    position: absolute;
    bottom: 0;
    left: ${props => props.$active ? '0px': '50%'};
    right: ${props => props.$active ? '0px': '50%'};
    height: 1px;
    background-color: #000000;
    transition: all .3s ease-out;
  }
  &:hover{
    &:after{
      left:0;
      right:0;
    }
  }
`;

export const TopMenu = ({items, isMobile, showMenu, toggleMenu}: ITopMenu) => {
  const toggleLink = () => {
    toggleMenu();
  }
  console.log(showMenu, isMobile)
  return (
    <StyledTopNav $showMenu={showMenu} $isMobile={isMobile}>
     <StyledTopNavList>
      {
        items.map(item => (
          <StyledTopNavItem key={item?.node.id} onClick={toggleLink}>
            <StyledTopNavLink href={{ pathname: `${item.node.uri}` }}>
              <span>{item?.node.label}</span>
            </StyledTopNavLink>
          </StyledTopNavItem>
        ))
      } 
     </StyledTopNavList> 
    </StyledTopNav>
  )
}