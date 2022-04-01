import React from 'react';
import iconLogo from '../../public/icon-logo.png'
import Image from 'next/image'
import style from './Header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href='/' passHref>
        <Image
            src={iconLogo}
            alt="Icono de la página"
            className={style.icon}
            height={50}
            width={50}
          />
        </Link>
      </header>
    </div>
  );
};
