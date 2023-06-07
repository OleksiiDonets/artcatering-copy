import { divide } from 'lodash';
import Image from 'next/image';
import { useRef } from 'react';
import { ImageBg, VideoBg } from '@/types/common';
import styled from 'styled-components'

interface IScreenBg {
  items: {
    image: ImageBg;
    video: VideoBg;
    embedVideo?: string;
  }
}
const EmptyBgElement = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -10;
  object-fit: cover;
  background-color: rgb(251 207 232);
`;
const IframeVideoWrap = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -10;
  object-fit: cover;
`;
const VideoElement = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  object-fit: cover;
  z-index: -10;
`;

const ImageWrap = styled.div`
  display: flex;
  position: absolute;
  z-index: -10;
  img{
    width: 100vw;
  }
`;

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