import React, { FunctionComponent } from "react"
import style from './Container.module.css'

interface ContainerProps {
  children: JSX.Element;
}

export const Container: FunctionComponent<ContainerProps> = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
