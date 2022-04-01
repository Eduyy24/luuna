import React, { FunctionComponent } from "react"
import style from './Layout.module.css';
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
        <div className={style.container}>
          <Container>
            {children}
          </Container>
        </div>
      <Footer />
    </>
  )
}
