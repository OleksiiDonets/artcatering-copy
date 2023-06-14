import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query getFooter {
    pageSettings: pageBy(uri: "homepage"){
      contacts{
        phoneNumber
        emailAdress
        schedule
      }
    }
    socialMenu: menuItems(where: { location: ADDITIONAL_MENU, parentId: "0"}) {
      edges{ 
        node {
          id
          label
          uri
        }
      }
    }
    footerMenu: menuItems(where: { location: FOOTER, parentId: "0"}) {
        edges{ 
          node {
            id
            label
            uri
          }
        }
    }
  }
`;