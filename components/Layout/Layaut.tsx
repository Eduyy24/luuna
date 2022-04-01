import React, { FunctionComponent } from "react"
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface LayoutProps {
  children: JSX.Element;
}

/**
 *  Layout Component
 *  This component is a wrapper
 * @param {LayoutProps} param props to component
 * @property {JSX.children} children Component to render in wrapper
 * @returns {JSX.Element} Component result to render
 */
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
