import { gql } from "@apollo/client";

export const GET_CART = gql`
  query getCart{
    cart {
      contents {
        nodes {
          key
          product {
            node {
              id
              databaseId
              name
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
      total
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation ($input: AddToCartInput!) {
    addToCart(input: $input) {
     cartItem {
      quantity
      total
      product {
        node {
          name
          image {
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
    }
  }
`;
