import React, { FunctionComponent } from "react";
import style from './LogoSection.module.css';
import Image from 'next/image'
import logo from '../../../public/images/logo.png'


export const LogoSection: FunctionComponent = () => {
  return (
    <section className={style.container}>
      <Image alt='logo github' src={logo} height={100} width={100} />
      <div>
        <h1>Luuna</h1>
        <span>Buscador de github</span>
      </div>
    </section>
  )
}