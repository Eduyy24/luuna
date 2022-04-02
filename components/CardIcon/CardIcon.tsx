import React, { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import style from './CardIcon.module.css'
import Link from "next/link";

type CardIconProps = {
  svgIcon: StaticImageData;
  label: string;
  route: string;
}

/**
 * CardIcon Component
 * Render a card for navigation to page in route property
 * @param {CardIconProps} props props for component
 * @returns {JSX.Element} Element to render
 */
export const CardIcon: FunctionComponent<CardIconProps> = ({
  svgIcon, label, route
}) => {
  return (
    <Link href={route} passHref>
      <div className={style.container}>
        <div>
          <Image alt="icon-button" src={svgIcon} height={180} width={180} />
        </div>
        <span>{label ?? ''}</span>
      </div>
    </Link>
  )
}