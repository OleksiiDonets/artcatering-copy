import Image from 'next/image';
import { ShopBanner } from '@/types/common';
import useWindowSize from '@/assets/hooks/useWindowSize';
import { BannerContainer } from '@/components/common/Banner/Banner.style';

interface IBanner {
  banners: ShopBanner;
};

export const Banner = ({ banners }:IBanner) => {
  const { width } = useWindowSize();

  return ( 
    <BannerContainer>
      {
        width <= 768 ? (
          banners.shopBanners.map((item, index ) => (
            <Image key={`${index}M`}  src={item.bannerImageMobile.sourceUrl} width={item.bannerImageMobile.mediaDetails.width} height={ item.bannerImageMobile.mediaDetails.height} alt={item.bannerImageMobile.altText} />
          ))
        ):(
          banners.shopBanners.map((item, index ) => (
            <Image key={`${index}D`}  src={item.shopBannersImg.sourceUrl} width={item.shopBannersImg.mediaDetails.width} height={ item.shopBannersImg.mediaDetails.height} alt={item.shopBannersImg.altText} />
          ))
        )
      }
    </BannerContainer>
  )
}