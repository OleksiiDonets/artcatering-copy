import { Layout } from '@/components/layout/Layout/Layout'
import { GET_HOMEPAGE } from '@/assets/queries/pages/homepage';
import { GetServerSidePropsContext, NextPage } from 'next';
import { addApolloState, initializeApollo } from '@/assets/queries/api';
import { useQuery } from '@apollo/client';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { FirstScreen } from '@/components/common/FirstScreenHome/FirstScreenHome';
import { Carousel } from '@/components/common/Carousel/Carousel';
import { EventsVideo } from '@/components/common/EventsVideo/EventsVideo';
import { Wysiwyg } from '@/components/common/Wysiwyg/Wysiwyg';


const HomePage: NextPage = () => {
  const{ 
    data:{
      page:{
        template:{ 
          contacts
        }, 
        homeFirstScreen,
        embedVideo,
        carousel,
        eventsVideo,
        carouselTestimonials,
        partners
      },
      socialMenu, 
      footerMenu,headerMenu 
    }
  } = useQuery(GET_HOMEPAGE);
  return (
    <Layout menus={{social: socialMenu.menuItems.nodes, header:headerMenu.menuItems.nodes, footer:footerMenu.menuItems.nodes}} contacts={contacts}>
      <FirstScreen  data={homeFirstScreen}/>
      {
        carousel.statusProjectsSlider &&  <Carousel title={carousel.sliderTitle} subtitle={carousel.sliderSubtitle} optPerView={1} optSpace={10}>
          {
            carousel.slider.map((item:any , index:number )=> (
              <SwiperSlide key={`q${index}`}>
                <div className="carousel-item flex flex-col lg:flex-row px-10 lg:px-20 mx-16">
                  <div className="carousel-image max-w-[560px]">
                    <Image
                      src={item.slideImage.sourceUrl}
                      alt="slide"
                      width={item.slideImage.mediaDetails.width}
                      height={item.slideImage.mediaDetails.height}
                    />
                  </div>
                  {
                    item.slideDescription &&
                    <div className="carousel-text ml-0 mt-5 lg:mt-0 lg:ml-10">
                    <Wysiwyg>{ item.slideDescription }</Wysiwyg>
                    </div>
                  }
                  
                </div>
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
          <div className="pt-9">
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
                    <div className="carousel-item px-5">
                      <Image 
                        src={item.slideImage.sourceUrl}
                        alt="slide"
                        width={item.slideImage.mediaDetails.width}
                        height={item.slideImage.mediaDetails.height}
                      />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Carousel>
          </div>
     }
      {
        partners.statusPartnersCarousel && 
          <div className="pt-20 pb-16 md:pt-36 md:pb-32">
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
                  <div className="carousel-item flex justify-center items-center h-[150px]">
                    <Image 
                      src={item.partnerLogo.sourceUrl}
                      alt="partner"
                      width={150}
                      height={150}
                    />
                  </div>
                </SwiperSlide>
              ))
            }
            </Carousel>
          </div>

      }
    </Layout>
  )
}

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo({ctx: { req }})
  await apolloClient.query({
    query: GET_HOMEPAGE,
  })
  return addApolloState(apolloClient, {props:{}})
}
export default HomePage