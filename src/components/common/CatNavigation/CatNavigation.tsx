import Link from "next/link";
import { Title, Container, CatList, CatItem } from "./CatNavigation.style";

interface ICatNavigation {
  items: {
    id: string;
    name: string;
    slug: string;
  }[];
};


export const CatNavigation = ({ items }:ICatNavigation) => {
  return (
    <Container>
      <Title>
        <h3>Категорії боксів</h3>
      </Title>
      <CatList>
        <ul>
          {
            items.map( item =>(
              <CatItem key={item.id}>
                <a href={`#${item.slug}`}>{item.name}</a>
              </CatItem>
            ))
          }
        </ul>
      </CatList>
    </Container>
  )
}