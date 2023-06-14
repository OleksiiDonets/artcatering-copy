import { gql } from "@apollo/client";
import  IMG_FRAGMENT from '@/assets/queries/fragments/image';

export const GET_FOODBOX_PAGE = gql`
  query getShopPage{
    page(id: "foodbox", idType: URI){
      title
      shopBanner{
        shopBanners {
          shopBannersImg{
            ${IMG_FRAGMENT}
          }
          bannerImageMobile {
            sourceUrl(size: MEDIUM_LARGE)
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
      selectCategory {
        categoryList{
          id
          name
          slug
          products {
            nodes {
            ... on SimpleProduct {
              id
              name
              uri
              shortDescription
              databaseId
              price
              image {
                sourceUrl(size: THUMBNAIL)
                mediaDetails {
                  sizes(include: THUMBNAIL){
                    height
                    width
                  }
                }
              }
            }
            }
          }
        }
      }
    }
  }
`