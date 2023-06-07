export default `
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
  footerMenu: menuItems(where: { location: FOOTER, parentId: "0"}) {
    edges{ 
      node {
        id
        label
        uri
      }
    }
  }
`