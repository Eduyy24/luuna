import React, { FunctionComponent } from "react";
import { CardIcon } from "../../CardIcon/CardIcon";
import style from './NavSection.module.css';
import icon from '../../../public/svg/icon-github.svg'

/**
 * NavSection Component
 * Static component with buttons for navigation to page search
 * repository and user of github
 * @returns {JSX.Element} Element to render
 */

export const NavSection: FunctionComponent = () => {
  return (
    <section className={style.container}>
      <CardIcon label="Buscar Usuario" svgIcon={icon}/>
      <CardIcon label="Buscar Repositorio" svgIcon={icon} />
    </section>
  )
}