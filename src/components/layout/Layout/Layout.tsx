import { FC } from "react"

import { Main } from '@/components/layout/Main/Main';
import { Header } from '@/components/layout/Header/Header';
import { SEO } from '@/components/layout/SEO/Seo';
import { Footer } from '@/components/layout/Footer/Footer';
import { Menu, IContacts } from "@/types/common";
import { ReactElement, ReactNode, useEffect } from "react"
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
export const Layout:FC<ILayout> = ({contacts, menus, children }) => {
  
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
    </>
  )
}