import { divide } from "lodash";
import Image from "next/image";
import { useRef } from "react";

interface IScreenBg {
  items: {
    image: ImageBg;
    video: VideoBg;
    embedVideo?: string;
  }
}
export const ScreenBg = ({ items: { image, video, embedVideo } }: IScreenBg) =>{
  const ref = useRef(null);
  
  if(!video || !embedVideo){ 
    return(
        <div className="flex absolute -z-10">
          <Image src={image?.sourceUrl} width={image?.mediaDetails.width} height={image?.mediaDetails.height} alt={image.altText ? image.altText : 'image'} className=" w-screen"/>
        </div>
    )
  } else if(video || !embedVideo) {
    return(
      <div className="video-wrap">
        <video ref={ref} width="auto" autoPlay muted loop poster={image?.sourceUrl} className="w-screen h-screen absolute -z-10 object-cover">
          <source src={video?.link} type={video.mimeType} />
        </video>
      </div>
    )
  } else if(!video && embedVideo) {
    return(
      <div className="video-wrap w-screen object-cover -z-10 h-screen">
        <iframe width="100%" height="100%" src={`${embedVideo}&autoplay=1&loop=1&start=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }else {
    return (
      <div className="flex bg-pink-200 w-full h-full -z-10 object-cover"></div>
    )
  }
}