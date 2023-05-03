import { Swiper } from "swiper/react";
import { Navigation, Autoplay, SwiperOptions } from "swiper";
import { SwiperNavigation } from "./SwiperNavigation";
import "swiper/css";

interface ICarousel {
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
  <div className="root container relative mx-auto mt-14 mb-14">
    <div className="flex flex-col font-playfair font-bold mb-12 text-center text-3xl lg:text-[42px]">
      <h4 className="block">{title}</h4>
      {
        regularSubtitle? (
          <span className="font-montserrat text-xl font-light mt-6">{subtitle}</span>
        ):(
          <span className="inline-block">{subtitle}</span>
        )
      }
    </div>
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
    </div>
  )
} 