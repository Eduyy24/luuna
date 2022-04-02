import React, { FunctionComponent } from "react";
import IUserModel from "../../../models/UserModel";
import { CardUser } from "../CardUser/CardUser";
import style from './SomeUsers.module.css'

type Props = {
  users: IUserModel[]
}

/**
 * SomeUsers Component
 * @param {Props} props props of component
 * @property {IUserModel[]} users list user to render
 * @returns {JSX.Element} Component to render
 */
export const SomeUsers: FunctionComponent<Props> = ({users}) => {
  return (
    <div className={style.container}>
      {
        users.map((user, idx) => (
          <CardUser key={idx} user={user} />
        ))
      }
    </div>
  )
}