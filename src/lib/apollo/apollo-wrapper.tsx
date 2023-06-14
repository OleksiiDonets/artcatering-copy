'use client';
import { ApolloClient, ApolloLink, HttpLink, SuspenseCache } from '@apollo/client';
import { ApolloNextAppProvider, NextSSRInMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr';
import { API_URL } from '@/config';
import { middleware } from '@/assets/queries/api';

export const middlware = new ApolloLink((operation, forward) => {
  const session = process.browser ? localStorage.getItem('woo-sesion') : null;
  if(session) {
    operation.setContext(() => ({
      headers: {
        'woocommerce-session': `Session ${session}`
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
    fetch
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