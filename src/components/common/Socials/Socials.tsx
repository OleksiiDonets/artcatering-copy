import Image from "next/image";
import facebook from '@/media/icons/Facebook.svg';
import instagram from '@/media/icons/Instagram.svg';
import { SocialIcons, Menu } from "@/types/common";
import Link from "next/link";
import styled from 'styled-components';

const socialIcons:SocialIcons = {
  "Facebook": facebook,
  "Instagram": instagram
};

interface ISocials {
  items: Menu;
  isFooter?: boolean
}

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  transition: all .3s ease-in-out;
  list-style: none;
`;

const StyledSocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Socials = ({items, isFooter = false}: ISocials) => {
  return (
    <StyledSocialList>
      {
        items.map(item => (
          <StyledSocialItem key={item.node.id}>
            <Link href={item.node.uri} target="_blank">
              <Image src={socialIcons[item.node.label].src} width={isFooter ? 40: socialIcons[item.node.label].width} height={isFooter ? 40 : socialIcons[item.node.label].height}  alt={item.node.label}/>
            </Link>
          </StyledSocialItem>
        ))
      }
    </StyledSocialList>
  )
}