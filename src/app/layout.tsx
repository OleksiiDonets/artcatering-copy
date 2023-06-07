import StyledComponentsRegistry from "@/lib/style/registry";
import { ApolloWrapper } from "@/lib/apollo/apollo-wrapper";
import { GlobalStyles } from "@/components/common/GlobalStyles/GlobalStyles";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const RootLayout = ({ children }:{children: React.ReactNode}) =>(
  <html>
    <body>
      <ApolloWrapper>
        <StyledComponentsRegistry>
          <GlobalStyles/>
          <Header/>
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </ApolloWrapper>
    </body>
  </html>
);
export default RootLayout;