import { gql } from '@apollo/client';
import IMAGE_FRAGMENT from '@/assets/queries/fragments/image';

export const GET_HOMEPAGE = gql`
  query getHomepage {
    page(id: "homepage", idType: URI) {
      homeFirstScreen {
        firstScreenSubtitle
        firstScreenText
        firstScreenTitle
        firstScreenBackgrounds {
          video {
            link
            mediaDetails {
              width
              height
            }
            mimeType
          }
          image {
           ${IMAGE_FRAGMENT} 
          }
          embedVideo
        }
      }
      embedVideo {
        videoLink
      }
      carousel {
        statusProjectsSlider
        sliderSubtitle
        sliderTitle
        slider {
          slideDescription
          slideImage {
            ${IMAGE_FRAGMENT}
          }
        }
      }
      eventsVideo {
        enableVideos
        videosFromEvents {
          videoLink
          description
        }
      }
      carouselTestimonials{
        statusTestimonialsCarousel
        blockTitle 
        blockSubtitle
        testimonialsSlider{
          slideImage{
            ${IMAGE_FRAGMENT}
          }
        }
      }
      partners {
        statusPartnersCarousel
        carouselTitle
        carouselSubtitle
        partnersCarousel {
          partnerLogo {
            ${IMAGE_FRAGMENT}
          }
        }
      }
    }
  }
` 