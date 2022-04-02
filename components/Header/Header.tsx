import React, { FunctionComponent } from 'react';
import iconLogo from '../../public/images/icon-logo.png'
import Link from 'next/link';
import Image from 'next/image'
import style from './Header.module.css';

/**
 * Header Component
 * Static component that renders a simple header
 * @returns {JSX.Element}
 */
export const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href='/' passHref>
          <a>
            <Image
              src={iconLogo}
              alt="Icono de la página"
              className={style.icon}
              height={50}
              width={50}
            />
          </a>
        </Link>
      </header>
    </div>
  );
};
