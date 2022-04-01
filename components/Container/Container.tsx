import React, { FunctionComponent } from "react"
import style from './Container.module.css'

interface ContainerProps {
  children: JSX.Element;
}

/**
 *  Wrapper componente for limit width in diferents width of screens
 * @param {ContainerProps} param props
 * @property {JSX.children} children component to render un wrapper
 * @returns {JSX.Element}
 */
export const Container: FunctionComponent<ContainerProps> = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
