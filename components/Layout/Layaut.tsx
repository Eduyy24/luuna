import React, { FunctionComponent } from "react"
import { Header } from "../Header/Header";
import style from './Layout.module.css'
interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <>
      <Header />
      <div className={style.container}>
        {children}
      </div>
    </>
  )
}
