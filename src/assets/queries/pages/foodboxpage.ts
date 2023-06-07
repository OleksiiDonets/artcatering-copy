import { gql } from "@apollo/client";

export const GET_FOODBOX_PAGE = gql`
  query getShopPage{
    page(id: "foodbox", idType: URI){
      title
      template {
        ... on DefaultTemplate {
          contacts {
            phoneNumber
            emailAdress
            schedule
          }
        }
      }
      selectCategory {
        selectCategory {
          name
          slug
          products{
            nodes {
              id
              link
              name
            }
          }
        }
      }
    }
  }
`