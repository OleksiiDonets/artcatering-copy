import { Swiper } from "swiper/react";
import { Navigation, Autoplay, SwiperOptions } from "swiper";
import { SwiperNavigation } from "./SwiperNavigation";
import { SliderContainer, SliderSubtitle, SliderSubtitleSimple, SliderTitle } from "@/components/common/Carousel/Carousel.style";
import "swiper/css";

export interface ICarousel {
  title: string;
  subtitle?: string;
  regularSubtitle?: boolean;
  children: JSX.Element | JSX.Element[];
  optPerView?: number;
  optSpace: number;
  optDelay?: number;
  optResponsive?: {
    [width:number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
}

export const Carousel = ({ title, subtitle, regularSubtitle, optPerView, optSpace, children, optDelay = 1500, optResponsive }: ICarousel) => {
  return (
  <SliderContainer>
    <SliderTitle>
      <h4>{title}</h4>
      {
        regularSubtitle? (
          <SliderSubtitle>{subtitle}</SliderSubtitle>
        ):(
          <SliderSubtitleSimple>{subtitle}</SliderSubtitleSimple>
        )
      }
    </SliderTitle>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={optSpace}
        slidesPerView={optPerView}
        slidesPerGroup={optPerView}
        loop={true}
        speed={2000}
        autoplay={{
          delay: optDelay,
        }}
        breakpoints ={optResponsive}
      >
        {children}
        <SwiperNavigation />
      </Swiper>
    </SliderContainer>
  )
} 