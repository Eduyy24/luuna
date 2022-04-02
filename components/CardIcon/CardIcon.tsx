import React, { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import style from './CardIcon.module.css'

type CardIconProps = {
  svgIcon: StaticImageData;
  label: string;
  onClick: () => void
}

export const CardIcon: FunctionComponent<CardIconProps> = ({
  svgIcon, label, onClick
}) => {
  return (
    <div className={style.container} onClick={onClick}>
      <div>
        <Image alt="icon-button" src={svgIcon} height={180} width={180} />
      </div>
      <span>{label ?? ''}</span>
    </div>
  )
}