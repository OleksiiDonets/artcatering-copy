import Image from "next/image";
import facebook from '../../../media/icons/Facebook.svg';
import instagram from '../../../media/icons/Instagram.svg';


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
    <ul className="flex flex-row gap-2 transition-all ease-in-out duration-300">
      {
        items.map(item => (
          <li key={item.id} className="transition-all ease-in-out">
            <a href={item.url} target="_blank">
              <Image src={socialIcons[item.label].src} width={isFooter ? 40: socialIcons[item.label].width} height={isFooter ? 40 : socialIcons[item.label].height}  alt={item.label}/>
            </a>
          </li>
        ))
      }
    </ul>
  )
}