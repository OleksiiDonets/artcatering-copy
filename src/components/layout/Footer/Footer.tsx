import { Socials } from "@/components/common/Socials/Socials";
import { Container } from "../Container/Container";

interface IFooter {
  menu: Menu;
  socialMenu: Menu;
  contacts: IContacts;
}
export const Footer = ({ menu, socialMenu, contacts}: IFooter) => {
  return (
    <footer className="sticky top-[100vh] bg-footer">
      <Container>
        <div className="grid grid-flow-row justify-items-center bg-footer pt-24">
          <div className="footer-contacts text-center">
            <div className="footer-phone font-montserrat text-2xl">
              <a href={`tel:${contacts.phoneNumber}`}> {contacts.phoneNumber}</a>
            </div>
            <div className="footer-email font-montserrat text-2xl mb-9">
              <a href={`mailto:${contacts.emailAdress}`}>{contacts.emailAdress}</a>
            </div>
            <div className="footer-schedule font-playfair font-light text-2xl md:text-3xl mb-4">
              <span>{contacts.schedule}</span>
            </div>
          </div>
          <div className="footer-description font-playfair text-lg max-w-[560px] text-center mb-10">
            <p>Залишились запитання? Телефонуйте або пишіть в соцмережі чи на електронну пошту :)</p>
          </div>
          <div className="footer-social">
            <Socials items={socialMenu} isFooter />
          </div>
          <div className="footer-menu mb-5 mt-20">
            <ul className="grid grid-flow-row md:grid-flow-col md:gap-7">
              {
                menu.map(item => (
                  <li key={item.id} className="font-montserrat uppercase text-base text-center mb-3"><a href={item.url}>{item.label}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}