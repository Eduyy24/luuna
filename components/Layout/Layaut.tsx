import React, { FunctionComponent } from "react"
import style from './Layout.module.css'
interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
