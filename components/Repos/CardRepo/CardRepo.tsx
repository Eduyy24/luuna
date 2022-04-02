import Image from "next/image";
import React, { FunctionComponent } from "react";
import IRepoModel from "../../../models/RepoModel";
import style from './CardUser.module.css'

type Props = {
  repo: IRepoModel
}

/**
 * CardUser Component
 * Render info of user
 * @param {Props} props props of component
 * @property {IUserModel} user user to render
 * @returns {JSX.Element} Component to render
 */
export const CardRepo: FunctionComponent<Props> = ({repo}) => {
  return (
    <div className={style.container}>
    </div>
  )
}