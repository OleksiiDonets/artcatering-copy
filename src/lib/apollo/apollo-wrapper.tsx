'use client';
import { ApolloClient, ApolloLink, HttpLink, SuspenseCache } from '@apollo/client';
import { ApolloNextAppProvider, NextSSRInMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetCartDocument } from '@/assets/queries/wooQueries/getCartDocument';
import { GraphQLClient } from 'graphql-request';
import { ICartDocument } from '@/types/common';

async function fetchSessionToken() {
  let sessionToken;
  try {
    const graphQLClient = new GraphQLClient('http://test-catering.local/graphql');
    const cartData:ICartDocument = await graphQLClient.request(GetCartDocument);

    sessionToken = cartData.customer.sessionToken;
    if(!sessionToken) {
      throw new Error('Failed to retrieve a new session token');
    }
  }
  catch (error) {
    console.error(error);
  }
  return sessionToken
};

const tokenValue = fetchSessionToken().then(value => value );

export const middleware = new ApolloLink((operation, forward) => {
  let session = typeof window !== 'undefined' ? localStorage.getItem('woo-sesion') : undefined;

  if(session) {
    operation.setContext(() => ({
      headers: {
        'woocommerce-session': `Session ${session}`
      }
    }))
  }else  {
   operation.setContext(() => ({
      headers: {
        'woocommerce-session': `Session ${tokenValue}`
      }
    }))
  }  
  return forward(operation);
});

export const afterware = new ApolloLink((operation, forward) => forward(operation).map((response) =>{
  const context = operation.getContext();
  const {response: {
    headers
  }} = context;

  const session = headers.get('woocommerce-session');

  if(session && typeof window !== 'undefined') {
    if('false' === session) {
      localStorage.removeItem('woo-session');
    } else if (!localStorage.getItem('woo-sesion')) {
      localStorage.setItem('woo-sesion', session);
    }
  }
  return response;
}));

function makeClient(){
  const httpLink = new HttpLink({
    uri: 'http://test-catering.local/graphql',
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: typeof window === "undefined" ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true
          }),
          httpLink
        ]): middleware.concat(
            afterware.concat(
              httpLink
            )
          ),
  })
};

function makeSuspenseCache(){
  return new SuspenseCache();
}

export function ApolloWrapper({ children }: React.PropsWithChildren){
  return (
    <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
      { children }
    </ApolloNextAppProvider>
  )
}