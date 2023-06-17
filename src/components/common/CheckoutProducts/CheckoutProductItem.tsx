import Image from 'next/image';
import { ProductsItem, ItemImage, ItemName, ItemPrice } from '@/components/common/CheckoutProducts/CheckoutProducts.style';
import { CartProduct } from '@/lib/store/CartProvider';

interface ICheckoutProductItem {
  item:CartProduct; 
};

export const CheckoutProductItem = ({ item }: ICheckoutProductItem) => {
  console.log("🚀 ~ file: CheckoutProductItem.tsx:9 ~ CheckoutProductItem ~ item:", item)
  const { product:{ node}} = item;
  return (
    <ProductsItem>
      <ItemImage>
        <Image src={node.image.sourceUrl} alt={node.image.altText} width={87} height={87} />
      </ItemImage>
      <ItemName>
        <h4>{ node.name }</h4>
      </ItemName>
      <ItemPrice>
        <span>{ node.price }</span>
      </ItemPrice>
      <div>count</div>
      <ItemPrice>
        <span>{ item.total }</span>
      </ItemPrice>
      <div>delete</div>
    </ProductsItem>
  )
}