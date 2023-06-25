import { gql } from "@apollo/client";

export const GET_CART = gql`
  query getCart{
    cart {
      contents {
        itemCount
        nodes {
          key
          product {
            node {
              ... on SimpleProduct{
                price
              }
              id
              databaseId
              name
              uri
              image {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
      subtotal
      total
      discountTax
      discountTotal
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
export const GET_ORDER_DATA = gql`
  query gettOrderData {
    paymentGateways {
      nodes {
        description
        title
        id
      }
    }
    cart {
      availableShippingMethods {
        supportsShippingCalculator
        rates {
          methodId
          label
          instanceId
          id
          cost
        }
      }
    }
  }
`;
export const UPDATE_CART = gql`
  mutation($input: UpdateItemQuantitiesInput!) {
    updateItemQuantities(input: $input){
      items{
        key
        product {
          node {
            ... on SimpleProduct{
              price
            }
            id
            databaseId
            name
            uri
            image {
              id
              sourceUrl
              altText
              title
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    } 
  }
`;