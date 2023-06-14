interface IMenuItem{
  node: {
    uri?: string | undefined;
    label: string;
    id?: string;
    cssClasses?: string[];
  }
};

export type Menu = IMenuItem[];

interface Icon {
  width: number;
  height: number;
  blurWidth: number;
  blurHeight: number;
  src: string;
};
interface SocialIcons {
  [x:string]: Icon;
}

interface IContacts {
  phoneNumber: string;
  emailAdress: string;
  schedule: string;
}


export interface VideoBg{
  link: string;
  mediaDetails: MediaDetails;
  mimeType: string;
}
export interface ImageItem {
  sourceUrl: string;
  altText: string;
  mediaDetails: MediaDetails;
}

interface MediaDetails {
  width: number;
  height: number;
}

interface CarouselItem {
  slideDescription: string;
  slideImage: ImageBg;
}

interface VideoItem {
  videoLink: string;
  description: string;
}

interface BannerItem {
  shopBannersImg: ImageItem;
  bannerImageMobile: ImageItem;
  shopBannersLink?: string;
}

export interface ShopBanner {
  shopBanners: BannerItem[];
}

export interface SimpleProduct {
  id: string;
  databaseId: string;
  name: string;
  shortDescription: string;
  uri: string;
  price: string;
  image: {
    sourceUrl: string;
    mediaDetails: {
      sizes: MediaDetails[];
    }
  }
}
export interface Category {
  id: string;
  name: string;
  slug: string;
  products: {
    nodes: SimpleProduct[]; 
  }
}
