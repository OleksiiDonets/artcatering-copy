import { ReactNode, FC, ReactElement, ReactChild} from 'react'
import classNames from "classnames";
import styled from 'styled-components';

interface IContainer {
  children: ReactNode;
  size?: string;
  className?: string;
  padding?: string;
}

const StyledContainer = styled.div<{$size?: string, $padding?: string}>`
  max-width: 100%;
  padding: 0 20px;
  @media screen and (min-width: 1024px ){
    max-width: 1820px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Container:FC<IContainer> = ({ children, size, className, padding }: IContainer) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}