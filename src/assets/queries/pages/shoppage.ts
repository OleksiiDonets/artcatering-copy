import { gql } from "@apollo/client";

export const GET_SHOPPAGE = gql`
  query getShopPage{
    page(id: "foodbox", idType: URI){
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