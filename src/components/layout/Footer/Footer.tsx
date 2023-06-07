'use client';
import { Socials } from "@/components/common/Socials/Socials";
import { Container } from "../Container/Container";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_FOOTER } from "@/assets/queries/footer";
import { IContacts, IMenuItem, Menu } from "@/types/common";
import styled from 'styled-components';
import Link from "next/link";
interface IFooter {
  socialMenu: {
    edges: Menu
  };
  footerMenu:{
    edges: Menu;
  }
  pageSettings: {
    contacts: IContacts
  };
};

const StyledFooterContainer = styled.div`
  position: sticky;
  top: 100vh;
  background-color: var(--footer-bg);
  padding-top:105px;
`;

const StyledDescriptorContainer = styled.div`
  max-width: 560px;
  margin-bottom: 2.5rem;
  font-family: var(--font-playfair);
  font-size:1.125rem;
  line-height: 1.75rem;
  text-align: center;
`;

const FooterMenuContainer = styled.div`
  margin: 5rem 0 1.25rem 0;
`;

const FooterMenuList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  list-style:none;
  @media screen and ( min-width: 768px){
    grid-auto-flow: column;
    gap: 1.75rem;
  }
`;
const FooterMenuItem = styled.li`
  font-family: var(--font-montserrat);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;
const FooterEmail = styled.div`
  font-family: var(--font-montserrat);
  margin-bottom: 2.25rem;
  font-size: 1.5rem;
  line-height:2rem;
  text-align: center;
`;
const FooterPhone = styled.div`
  font-family: var(--font-montserrat);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
`;
const FooterSchedule = styled.div`
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
const FooterGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  background-color: var(--footer-bg);
`;
export const Footer = () => {
  const { data: {
    pageSettings: {
      contacts 
    },
    socialMenu: {
      edges: menuSocItems
    },
    footerMenu: {
      edges: menuFooterItems
    }
  } } = useSuspenseQuery<IFooter>(GET_FOOTER);
  return (
    <StyledFooterContainer>
      <Container>
        <FooterGrid>
          <div className="footer-contact">
            <FooterPhone>
              <a href={`tel:${contacts.phoneNumber}`}> {contacts.phoneNumber}</a>
            </FooterPhone>
            <FooterEmail>
              <a href={`mailto:${contacts.emailAdress}`}>{contacts.emailAdress}</a>
            </FooterEmail>
            <FooterSchedule>
              <span>{contacts.schedule}</span>
            </FooterSchedule>
          </div>
          <StyledDescriptorContainer>
            <p>Залишились запитання? Телефонуйте або пишіть в соцмережі чи на електронну пошту :)</p>
          </StyledDescriptorContainer>
          <div className="footer-social">
            <Socials items={menuSocItems} isFooter />
          </div>
          <FooterMenuContainer>
            <FooterMenuList>
              {
                menuFooterItems.map((item: IMenuItem) => (
                  <FooterMenuItem key={item.node.id}>
                    <Link href={item.node.uri}>{item.node.label}</Link>
                  </FooterMenuItem>
                ))
              }
            </FooterMenuList>
          </FooterMenuContainer>
        </FooterGrid>
      </Container>
    </StyledFooterContainer>
  )
}