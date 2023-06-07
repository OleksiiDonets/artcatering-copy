import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface IBurgerMenu {
  isMobile: boolean;
  showMenu: boolean;
  toggleMenu: () => void;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  border:none;
  background-color: #FFFFFF;
  cursor: pointer;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transition: all ease-in;
`;

export const BurgerMenu = ({isMobile, showMenu , toggleMenu}: IBurgerMenu) => {
  if(isMobile){
    return (
      <StyledButton type="button" onClick={toggleMenu}>
        {showMenu ? (
          <StyledIcon color='#000000' icon="xmark" size='2x'/>
        ) : (
          <StyledIcon color='#000000' icon="bars" size='lg'/>
        )}
      </StyledButton>
    )
  }
  return null
}