import Link from 'next/link';
import Image from 'next/image';
import { SimpleProduct } from '@/types/common';
import { ItemWrap, ItemName, ItemDescription, ItemButtons, ItemDetail, ItemBuy } from '@/components/common/ProductItem/ProductItem.style';
import useAddToCart from '@/assets/hooks/useAddToCart';

interface IProductItem {
  item: SimpleProduct;
}
export const ProductItem = ({ item }: IProductItem) => {
  const { handleAddToCart } = useAddToCart(item);
  return(
    <ItemWrap>
      <Link href={item.uri}>
        <Image src={item.image.sourceUrl} width={item.image.mediaDetails.sizes[0].width} height={item.image.mediaDetails.sizes[0].height} alt={item.name}/>
      </Link>
      <ItemName>
        <h3>{item.name}</h3>
      </ItemName>
      <ItemDescription dangerouslySetInnerHTML={{__html:`${item.shortDescription}`}} />
      <ItemButtons>
        <ItemDetail>
          Детальніше
        </ItemDetail>
        <ItemBuy onClick={handleAddToCart}>
          купити
        </ItemBuy>
      </ItemButtons>
    </ItemWrap>
  )
}