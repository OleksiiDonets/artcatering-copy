'use client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { GET_HOMEPAGE } from '@/assets/queries/pages/homepage';
import { FirstScreen, IFirstScreen } from '@/components/common/FirstScreenHome/FirstScreenHome';
import { Carousel, ICarousel } from '@/components/common/Carousel/Carousel';
import { Wysiwyg } from '@/components/common/Wysiwyg/Wysiwyg';
import { CarouselItem, ImageBg, VideoBg, VideoItem } from '@/types/common';
import { EventsVideo } from '@/components/common/EventsVideo/EventsVideo';
import styled from 'styled-components';

interface IHome {
  page: {
    homeFirstScreen:{
      firstScreenBackgrounds: {
        image: ImageBg;
        video: VideoBg;
        embedVideo: string;
      }
      firstScreenSubtitle: string;
      firstScreenText: string;
      firstScreenTitle: string;
    };
    carousel: {
      statusProjectsSlider: boolean;
      sliderTitle: string;
      sliderSubtitle: string;
      slider: CarouselItem[];
    };
    eventsVideo: {
      enableVideos: boolean;
      videosFromEvents: VideoItem[];
    };
    carouselTestimonials: {
      statusTestimonialsCarousel: boolean;     
      blockTitle: string;
      testimonialsSlider: CarouselItem[];
    };
    partners: {
      statusPartnersCarousel: boolean;     
      carouselTitle: string;
      carouselSubtitle: string;
      partnersCarousel: CarouselItem[];
    }
  }
};
const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  padding-bottom: 2.5rem;
  margin: 0 4rem;
  @media screen and ( min-width: 1024px) {
    flex-direction: row;
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;
const SliderItemImage = styled.div`
  max-width: 560px;
`;
const SliderText = styled.div`
  margin-left: 1.25rem;
  margin-top:0;
  @media screen and ( min-width: 1024px) {
    margin-left: 2.5rem;
  }
`;
const TestimonialsItem = styled.div`
  padding: 0 1.25rem;
`;
const PartnersItem = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  img{
    width: 150px;
  }
`;
export default function HomePage() {
  const { data:{
      page:{
        homeFirstScreen,
        carousel,
        eventsVideo,
        carouselTestimonials,
        partners
      },
    }
  } = useSuspenseQuery<IHome>(GET_HOMEPAGE);
  return (
    <>
      <FirstScreen data={homeFirstScreen} />
      {
        carousel.statusProjectsSlider &&  <Carousel title={carousel.sliderTitle} subtitle={carousel.sliderSubtitle} optPerView={1} optSpace={10}>
          {
            carousel.slider.map((item:any , index:number )=> (
              <SwiperSlide key={`q${index}`}>
                <SliderItem>
                  <SliderItemImage>
                    <Image
                      src={item.slideImage.sourceUrl}
                      alt="slide"
                      width={item.slideImage.mediaDetails.width}
                      height={item.slideImage.mediaDetails.height}
                    />
                  </SliderItemImage>
                  {
                    item.slideDescription &&
                    <SliderText>
                      <Wysiwyg>{ item.slideDescription }</Wysiwyg>
                    </SliderText>
                  }
                  
                </SliderItem>
              </SwiperSlide>
            ))
          }
        </Carousel>
      }
      {
        eventsVideo.enableVideos && <EventsVideo items={eventsVideo?.videosFromEvents}/>
      }
      {
        carouselTestimonials.statusTestimonialsCarousel && 
          <Carousel 
            title={carouselTestimonials.blockTitle} 
            optPerView={3} 
            optSpace={1}
            optDelay={4000}
            optResponsive={{
              360:{
                slidesPerView:1,
                slidesPerGroup:1,
                spaceBetween:30
              },
              768:{
                slidesPerView: 2,
                slidesPerGroup:2,
                spaceBetween: 20
              },
              1024: {
                slidesPerGroup:3,
                slidesPerView:3,
                spaceBetween:30
              }
            }}
          >
            {
              carouselTestimonials.testimonialsSlider.map( (item:any, index:number) => (
                <SwiperSlide key={`a${index}`}>
                  <TestimonialsItem className="carousel-item px-5">
                    <Image 
                      src={item.slideImage.sourceUrl}
                      alt="slide"
                      width={item.slideImage.mediaDetails.width}
                      height={item.slideImage.mediaDetails.height}
                    />
                  </TestimonialsItem>
                </SwiperSlide>
              ))
            }
          </Carousel>
      }
      {
        partners.statusPartnersCarousel && 
          <Carousel 
            title={partners.carouselTitle} 
            subtitle={partners.carouselSubtitle} 
            regularSubtitle 
            optSpace={1} 
            optPerView={4}
            optDelay={3000}
            optResponsive={{
              360:{
                slidesPerGroup: 2,
                slidesPerView: 2,
              },
              991:{
                slidesPerView: 3,
                slidesPerGroup: 3
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10
              }
            }}
          >
            {
              partners.partnersCarousel.map((item:any, index:number) => (
                <SwiperSlide key={`w${index}`}>
                  <PartnersItem>
                    <Image 
                      src={item.partnerLogo.sourceUrl}
                      alt="partner"
                      width={150}
                      height={150}
                    />
                  </PartnersItem>
                </SwiperSlide>
              ))
            }
          </Carousel>
      }
    </>
  )
}