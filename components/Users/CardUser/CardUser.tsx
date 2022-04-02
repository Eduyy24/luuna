import { url } from "inspector";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import IUserModel from "../../../models/UserModel";
import style from './CardUser.module.css'

type Props = {
  user: IUserModel
}

/**
 * CardUser Component
 * Render info of user
 * @param {Props} props props of component
 * @property {IUserModel} user user to render
 * @returns {JSX.Element} Component to render
 */
export const CardUser: FunctionComponent<Props> = ({user}) => {
  return (
    <div className={style.container}>
      <Image src={user.avatar_url} alt='avatar user' width={100} height={100} />
      <a target='_blank' href={`https://github.com/${user.login}`} rel='noreferrer' >
        {user.login}
      </a>
    </div>
  )
}