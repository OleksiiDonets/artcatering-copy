'use client';
import { Playfair_Display, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { createGlobalStyle } from 'styled-components';

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

const GlobalStyle = createGlobalStyle`
  :root{
    --font-montserrat: ${montserrat.style.fontFamily};
    --font-cormorant: ${cormorant.style.fontFamily};
    --font-playfair: ${playfair.style.fontFamily};
    --footer-bg: #f3f3f3;
    --pink-color: #f6dddf;
    --gray-color: #888888;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-weight: normal;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    background-color: #ffffff;
    font-family: var(--font-montserrat);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  img{
    width: 100%;
    height: auto;
  }
  .content {
    font-family: var(--font-playfair);
  }
  .content h3 {
    font-weight: 900;
    font-size: 30px;
    margin-bottom: 30px;
  }

  .content p {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .content h3 {
      font-size: 36px;
  }
}
`;

export const GlobalStyles = () => (
  <><GlobalStyle/></>
)