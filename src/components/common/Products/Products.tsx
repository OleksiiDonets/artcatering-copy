import { Category } from '@/types/common';
import { ProductGrid } from '@/components/common/ProductGrid/ProductGrid';
import { Container } from './Products.style';

interface IProducts {
  items: Category[];
}
export const Products = ({items}: IProducts) => {
  return (
    <Container>
      {
        items.map( item =>(
          <ProductGrid key={item.id}  category={item}/>
        ))
      }
    </Container>
  )
};