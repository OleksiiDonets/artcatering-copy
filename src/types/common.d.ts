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

export interface ICartDocument {
  customer: {
    sessionToken: string;
  }
}
interface CartProductImage {
  title: string;
  altText: string;
  sourceUrl: string;
}
export interface CartProduct {
  key: string;
  quantity: number;
  subTotal: string;
  total: string;
  discountTax?: string;
  discountTotal?: string;
  product: {
    node:{
      databaseId: number;
      id: string;
      name: string;
      uri: string;
      price: string;
      image: CartProductImage;
    };
  }
};

export interface CartObject {
  contents:{
    itemCount: number;
    nodes: CartProduct[];
  };
  subTotal: string;
  discountTax: string;
  discountTotal: string;
  total:string;
};

type TUpdatedItems = { key: string; quantity: number }[];

export interface IUpdateCartItem {
  key: string;
  quantity: number;
}

export interface IUpdateCartInput {
  clientMutationId: string;
  items: IUpdateCartItem[];
}

export interface IUpdateCartVariables {
  input: IUpdateCartInput;
}

export interface IUpdateCartRootObject {
  variables: IUpdateCartVariables;
}

export interface IPaymentMethod {
  description: string;
  id: string;
  title: string;
}

export interface IShippingMethod {
  label: string;
  methodId: string;
}

export interface IOrderMethods {
  paymentGateways: {
    nodes: IPaymentMethod[];
  }
  cart: {
    availableShippingMethods: {
      rates: IShippingMethod[];
    }[];
  }
};

export type TRadios = {
  title: string;
  description?: string;
  methodId: string;
}