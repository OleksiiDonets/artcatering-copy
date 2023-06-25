import { ProductsTable, ProductsItem, ItemImage, ItemName, ItemPrice } from '@/components/common/CheckoutProducts/CheckoutProducts.style';
import { CartProduct } from '@/types/common';
import Image from 'next/image';
import { ProductCounter } from '@/components/common/ProductCounter/ProductCounter';
import { RemoveItem } from '@/components/common/RemoveItem/RemoveItem';
interface ICheckoutProducts {
  products?: CartProduct[];
}

export const CheckoutProducts = ({ products }:ICheckoutProducts) => {
  return (
    <ProductsTable>
      {
        products?.map( item => (
          <ProductsItem key={item.key}>
            <ItemImage>
              <Image src={item.product.node.image.sourceUrl} alt={item.product.node.image.altText} width={87} height={87} />
            </ItemImage>
            <ItemName>
              <h4>{ item.product.node.name }</h4>
            </ItemName>
            <ItemPrice>
              <span>{ item.product.node.price }</span>
            </ItemPrice>
            <ProductCounter count={item.quantity} cartKey={item.key} />
            <ItemPrice>
              <span>{ item.total }</span>
            </ItemPrice>
            <RemoveItem itemKey={item.key} />
            {/* <div>delete</div> */}
          </ProductsItem>
        ))
      }
    </ProductsTable>
  )
}