import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: sticky;
  top: 100vh;
  background-color: var(--footer-bg);
  padding-top:105px;
`;

export const DescriptorContainer = styled.div`
  max-width: 560px;
  margin-bottom: 2.5rem;
  font-family: var(--font-playfair);
  font-size:1.125rem;
  line-height: 1.75rem;
  text-align: center;
`;

export const FooterMenuContainer = styled.div`
  margin: 5rem 0 1.25rem 0;
`;

export const FooterMenuList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  list-style:none;
  @media screen and ( min-width: 768px){
    grid-auto-flow: column;
    gap: 1.75rem;
  }
`;
export const FooterMenuItem = styled.li`
  font-family: var(--font-montserrat);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const FooterEmail = styled.div`
  font-family: var(--font-montserrat);
  margin-bottom: 2.25rem;
  font-size: 1.5rem;
  line-height:2rem;
  text-align: center;
`;
export const FooterPhone = styled.div`
  font-family: var(--font-montserrat);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
`;
export const FooterSchedule = styled.div`
  font-family: var(--font-playfair);
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px){
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
export const FooterGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  background-color: var(--footer-bg);
`;