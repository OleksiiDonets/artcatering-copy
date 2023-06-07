import { Swiper } from "swiper/react";
import { Navigation, Autoplay, SwiperOptions } from "swiper";
import { SwiperNavigation } from "./SwiperNavigation";
import styled, { css } from 'styled-components';
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
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 3.5rem auto;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
      max-width: 768px;
  }
  @media (min-width: 1024px) {
      max-width: 1024px;
  }
  @media (min-width: 1280px) {
      max-width: 1280px;
  }
  @media (min-width: 1536px) {
      max-width: 1536px;
  }
`;
const SliderTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.875rem;
  line-height: 2.25rem;
  text-align: center;
  font-family: var(--font-playfair);
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and ( min-width: 1024px){
    font-size: 42px;
  }
  h4{
    display: block;
  }
`;
const SliderSubtitle = styled.span`
  font-family: var(--font-montserrat);
  font-weight: 300;
  margin-top: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const SliderSubtitleSimple = styled.span`
  display: inline-block;
`;
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