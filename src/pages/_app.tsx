import '@/styles/globals.css'
import { Playfair_Display, Montserrat, Cormorant_Garamond } from 'next/font/google'
import type { AppProps } from 'next/app'
import classNames from 'classnames';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/assets/queries/api';

const montserrat = Montserrat({
  subsets: ['cyrillic-ext'],
  variable: '--font-montserrat'
});
const cormorant = Cormorant_Garamond({
  weight:'500',
  subsets:['cyrillic-ext'],
  variable: '--font-cormorant',
});
const playfair = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-playfair',
});
const montserratVar = montserrat.variable;
const cormorantVar = cormorant.variable;
const playfairVar = playfair.variable;

export default function App({ Component, pageProps }: AppProps) {
  const fontFamiles = classNames({
    montserratVar:true,
    cormorantVar:true,
    playfairVar:true
  });
  const apolloClient = useApollo(pageProps)
  return(
    <ApolloProvider client={apolloClient}>
        <div className={`${montserratVar} ${cormorantVar} ${playfairVar} h-full`}>
          <Component {...pageProps} />
        </div>
    </ApolloProvider>
  ) 
}
