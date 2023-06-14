import styled from "styled-components";

export const AppContainer = styled.div<{$size?: string, $padding?: string}>`
  max-width: 100%;
  padding: 0 20px;
  @media screen and (min-width: 1024px ){
    max-width: 1820px;
    width: 100%;
    margin: 0 auto;
  }
`;

