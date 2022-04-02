import React, { FunctionComponent } from "react";
import IUserModel from "../../../models/UserModel";
import style from './CardUser.module.css'

type Props = {
  user: IUserModel
}

/**
 * SomeUsers Component
 * @param {Props} props props of component
 * @property {IUserModel} user user to render
 * @returns {JSX.Element} Component to render
 */
export const CardUser: FunctionComponent<Props> = ({user}) => {
  return (
    <div>
      {user.id}
    </div>
  )
}