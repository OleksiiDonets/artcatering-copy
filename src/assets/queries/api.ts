import { ApolloClient, ApolloLink, createHttpLink, from, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { Observable } from '@apollo/client/utilities';
import { SchemaLink } from '@apollo/client/link/schema'
import { useMemo } from 'react';
import { isEqual } from 'lodash';
import { API_URL } from '@/config';
import  merge  from 'deepmerge';
import { GetCartDocument } from './wooQueries';

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

type SchemaContext =
  | SchemaLink.ResolverContext
  | SchemaLink.ResolverContextFunction;

export  const middleware = new ApolloLink((operation, forward) => {
  const session = process.browser ? localStorage.getItem('woo-session') : null;

  if(session){
    operation.setContext( () => ({
      headers: {
        'woocommerce-session': `Session ${session}`
      }
    }))
  }
  return forward(operation);
});

export const afterware  = new ApolloLink((operation, forward) => 
  forward(operation).map((response) => {

    const context = operation.getContext();
    const { response: { headers}} = context;

    const session = headers.get('woocommerce-session');
    if(session && process.browser) {
      if(false ===  session){
        localStorage.removeItem('woo-session');
      } else if(!localStorage.getItem('woo-session')) {
        localStorage.setItem('woo-session', session);
      }
    }
    return response;
  })
);

const clientSide = typeof window === 'undefined';

function createApolloClient(){
  return new ApolloClient({
    ssrMode: clientSide,
    link: middleware.concat(
      afterware.concat(
        createHttpLink({
          uri: API_URL,
          fetch
        })
      )
    ),
    cache: new InMemoryCache(),
    connectToDevTools: true
  })
}

interface InitApollo {
  initialState?: any;
  ctx?: SchemaContext;
}
export function initializeApollo({  initialState }: InitApollo) {
  const _apolloClient =
    apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d =>
          sourceArray.every(s => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: { props: any }
) {
  pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(
    () => initializeApollo({ initialState: state }),
    [state]
  );
  return store;
}
