import { gql } from "@apollo/client";

export const  GET_MENUS = gql`
  query getMenus{
    phoneNumber: pageBy(uri: "homepage"){
      contacts{
        phoneNumber
      }
    }
    headerMenu: menuItems(where: { location: PRIMARY, parentId: "0"}) {
      edges{ 
        node {
          id
          label
          uri
        }
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
    
  }
`;
