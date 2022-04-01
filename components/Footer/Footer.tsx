import React from 'react';
import { Container } from '../Container/Container';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <Container>
          <p>hola mundo</p>
        </Container>
      </footer>
    </div>
  );
};
