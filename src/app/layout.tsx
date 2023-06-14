import StyledComponentsRegistry from "@/lib/style/registry";
import { ApolloWrapper } from "@/lib/apollo/apollo-wrapper";
import { CartProvider } from "@/lib/store/CartProvider";
import { GlobalStyles } from "@/components/common/GlobalStyles/GlobalStyles";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const RootLayout = ({ children }:{children: React.ReactNode}) =>(
  <html>
    <body>
      <ApolloWrapper>
        <CartProvider>
          <StyledComponentsRegistry>
            <GlobalStyles/>
            <Header/>
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </CartProvider>
      </ApolloWrapper>
    </body>
  </html>
);
export default RootLayout;