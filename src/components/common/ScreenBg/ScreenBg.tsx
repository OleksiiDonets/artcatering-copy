import { divide } from 'lodash';
import Image from 'next/image';
import { useRef } from 'react';
import { ImageItem, VideoBg} from '@/types/common';
import { ImageWrap, VideoElement, IframeVideoWrap, EmptyBgElement } from '@/components/common/ScreenBg/ScreenBg.style';
interface IScreenBg {
  items: {
    image: ImageItem;
    video: VideoBg;
    embedVideo?: string;
  }
}

export const ScreenBg = ({ items: { image, video, embedVideo } }: IScreenBg) =>{
  const ref = useRef(null);
  if(!video || !embedVideo){ 
    return(
        <ImageWrap>
          <Image src={image?.sourceUrl} width={image?.mediaDetails.width} height={image?.mediaDetails.height} alt={image.altText ? image.altText : 'image'} className=" w-screen"/>
        </ImageWrap>
    )
  } else if(video || !embedVideo) {
    return(
      <div className="video-wrap">
        <VideoElement ref={ref} width="auto" autoPlay muted loop poster={image?.sourceUrl}>
          <source src={video?.link} type={video.mimeType} />
        </VideoElement>
      </div>
    )
  } else if(!video && embedVideo) {
    return(
      <IframeVideoWrap>
        <iframe width="100%" height="100%" src={`${embedVideo}&autoplay=1&loop=1&start=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </IframeVideoWrap>
    )
  }else {
    return (
      <EmptyBgElement></EmptyBgElement>
    )
  }
}