'use client';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Container } from "@/components/layout/Container/Container";
import { GET_FOODBOX_PAGE } from "@/assets/queries/pages/foodboxpage";
import { Banner } from "@/components/common/Banner/Banner";
import { CatNavigation } from "@/components/common/CatNavigation/CatNavigation";
import { Products } from "@/components/common/Products/Products";
import { Category, ShopBanner } from "@/types/common";
import styled from 'styled-components';
export const dynamic = "force-dynamic";
interface IFoodbox {
 page: {
  title: string;
  selectCategory: {
    categoryList: Category[];
  };
  shopBanner: ShopBanner;
 }
};

const ProductsSection = styled.section`
  max-width: 1290px;
  margin: 0 auto;
  padding: 20px;
`;

const PageTitle = styled.div`
  margin: 0 auto;
  text-align:center;
  margin-bottom: 2rem;
  h1{
    font-size: 50px;
    font-family: var(--font-montserrat);
  }
`;

export default function FoodboxPage() {
  const { data: {
    page: {
      title,
      shopBanner,
      selectCategory:{
        categoryList
      }
    }
  }} = useSuspenseQuery<IFoodbox>(GET_FOODBOX_PAGE,{
    fetchPolicy: 'no-cache'
  });
  const catArr = categoryList.map( item => {
    return {
      name: item.name,
      slug: item.slug,
      id: item.id
    }
  });

  return (
    <Container>
      <ProductsSection>
        <PageTitle>
          <h1>{ title }</h1>
        </PageTitle>
        <Banner banners={shopBanner}/>
        <CatNavigation  items={catArr}/>
        <Products items={categoryList}/>
      </ProductsSection>
    </Container>
  )
}
