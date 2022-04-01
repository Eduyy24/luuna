import React, { FunctionComponent } from "react"
import style from './Container.module.css'

interface ContainerProps {
  children: JSX.Element;
}

/**
 *  Continaer Component
 *  Wrapper componente for limit width in diferents width of screens
 * @param {ContainerProps} param props
 * @property {JSX.children} children Component to render in wrapper
 * @returns {JSX.Element} Component result to render
 */
export const Container: FunctionComponent<ContainerProps> = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
