'use client';
import { Socials } from "@/components/common/Socials/Socials";
import { Container } from "../Container/Container";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_FOOTER } from "@/assets/queries/menus/footer";
import { IContacts, IMenuItem, Menu } from "@/types/common";
import Link from "next/link";
import { FooterContainer, FooterGrid, FooterEmail, FooterMenuContainer, FooterMenuList, FooterMenuItem, FooterPhone, FooterSchedule, DescriptorContainer } from '@/components/layout/Footer/Footer.style';
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
    <FooterContainer>
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
          <DescriptorContainer>
            <p>Залишились запитання? Телефонуйте або пишіть в соцмережі чи на електронну пошту :)</p>
          </DescriptorContainer>
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
    </FooterContainer>
  )
}