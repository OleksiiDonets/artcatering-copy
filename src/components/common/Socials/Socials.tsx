import Image from "next/image";
import facebook from '@/media/icons/Facebook.svg';
import instagram from '@/media/icons/Instagram.svg';
import { SocialIcons, Menu } from "@/types/common";
import { SocialList, SocialItem } from '@/components/common/Socials/Socials.style';
import Link from "next/link";

const socialIcons:SocialIcons = {
  "Facebook": facebook,
  "Instagram": instagram
};

interface ISocials {
  items: Menu;
  isFooter?: boolean
}

export const Socials = ({items, isFooter = false}: ISocials) => {
  return (
    <SocialList>
      {
        items.map(item => (
          <SocialItem key={item.node.id}>
            <Link href={item.node.uri} target="_blank">
              <Image src={socialIcons[item.node.label].src} width={isFooter ? 40: socialIcons[item.node.label].width} height={isFooter ? 40 : socialIcons[item.node.label].height}  alt={item.node.label}/>
            </Link>
          </SocialItem>
        ))
      }
    </SocialList>
  )
}