import React, { FunctionComponent } from "react"
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
        <Container>
          {children}
        </Container>
      <Footer />
    </>
  )
}
