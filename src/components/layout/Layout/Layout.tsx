import { Main } from "../Main/Main"
import { Header } from "../Header/Header"
import { SEO } from "../SEO/Seo"
import { Footer } from "../Footer/Footer"
import { ReactNode, useEffect } from "react"
import { useRouter } from "next/router"

interface ILayout {
  children?: JSX.Element[];
  menus:{
    social: Menu;
    header: Menu;
    footer: Menu
  };
  contacts: IContacts;
};
export const Layout = ({contacts, menus, children }: ILayout) => {
  
  // useEffect(() => {
  //   let origin = sessionStorage.getItem('__artcateringOriginPage');

  //   if(!origin){
  //     origin = `artcatering.lviv.ua/${decodeURIComponent(router.asPath.split('?')[0].replace('/', ''))}` 
  //     const isIndex = origin === ''
  //     sessionStorage.setItem('__artcateringOriginPage', isIndex ? 'artcatering.lviv.ua/' : origin)
  //   }
  // }, [])
  return (
    <>
      <SEO/>
      <Header topMenu={menus.header} socialMenu={menus.social} phone={contacts.phoneNumber} />
      <Main>{ children }</Main>
      <Footer menu={menus.footer} socialMenu={menus.social} contacts={contacts}/>
    </>
  )
}