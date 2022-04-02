import React, { FunctionComponent } from "react";
import { CardIcon } from "../../CardIcon/CardIcon";
import style from './NavSection.module.css';
import iconUser from '../../../public/svg/icon-user.svg'
import iconRepo from '../../../public/svg/icon-repository.svg'

/**
 * NavSection Component
 * Static component with buttons for navigation to page search
 * repository and user of github
 * @returns {JSX.Element} Element to render
 */

export const NavSection: FunctionComponent = () => {
  return (
    <section className={style.container}>
        <CardIcon
          label="Buscar Usuario"
          svgIcon={iconUser}
          route='/users'
        />
        <CardIcon
          label="Buscar Repositorio"
          svgIcon={iconRepo}
          route='/repos'
        />

    </section>
  )
}