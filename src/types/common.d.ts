import { Url } from "next/dist/shared/lib/router/router";

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


interface VideoBg {
  link: string;
  mediaDetails: MediaDetails;
  mimeType: string;
}
interface ImageBg {
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