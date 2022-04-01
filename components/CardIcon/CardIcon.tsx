import { StaticImageData } from "next/image";
import React, { FunctionComponent } from "react";

type CardIconProps = {
  svgIcon: StaticImageData;
  label: string;
}

export const CardIcon: FunctionComponent<CardIconProps> = ({
  svgIcon, label
}) => {
  return (
    <div></div>
  )
}