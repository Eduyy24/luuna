import React from 'react';
import style from './Footer.module.css';
import Image from 'next/image';
import iconGithub from '../../public/svg/icon-github.svg'
import iconInstagram from '../../public/svg/icon-instagram.svg'
import iconLinkedin from '../../public/svg/icon-linkedin.svg'

import { Container } from '../Container/Container';

export const Footer = () => {
  return (
    <div className={style.container}>
      <Container>
        <footer className={style.footer}>
            <div>
              <span><strong>Nosotros</strong></span>
              <a href="https://luuna.mx/">Conoce más</a>
            </div>

            <div>
              <span><strong>Hecho para</strong></span>
              <span>
                <a href="https://luuna.mx/">
                {' '}Prueba tecnica</a> de la empresa
                {' '}<a href="https://luuna.mx/">Luuna</a></span>
            </div>

            <div>
              <span><strong>Desarrollado por</strong></span>
              <span>
                <a href='https://twitter.com/eduyy24'>Eduardo Pinedo</a>
                {' '} almacenado en este
                {' '} <a href='https://twitter.com/eduyy24'>repositorio.</a>
              </span>
              <div className={style.container_icons}>
                <a href="https://github.com/Eduyy24?tab=repositories">
                  <Image alt='icon github' src={iconGithub} height={30} width={30} />
                </a>
                <a href="https://www.instagram.com/eduyypi/">
                  <Image alt='icon instagram' src={iconInstagram} height={30} width={30} />
                </a>
                <a href="https://www.linkedin.com/in/eduardo-luis-pinedo-jim%C3%A9nez-998813191/">
                  <Image alt='icon linkedin' src={iconLinkedin} height={30} width={30} />
                </a>
              </div>
            </div>
        </footer>
      </Container>
    </div>
  );
};
