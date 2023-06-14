import { Category } from '@/types/common'
import { GridWrap, Title, Grid } from './ProductGrid.style'
import { ProductItem } from '@/components/common/ProductItem/ProductItem';
interface IProductGrid {
  category: Category;
}


export const ProductGrid = ({ category }: IProductGrid) => {
  return (
    <GridWrap id={category.slug}>
      <Title>
        <h3>{ category.name }</h3>
      </Title>
      <Grid>
      {
        category.products.nodes.map(product =>(
          <ProductItem key={product.id} item={product}/>
        ))
      }
      </Grid>
    </GridWrap>
  )
}