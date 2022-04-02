import React, { FunctionComponent } from "react";
import IUserModel from "../../../models/UserModel";
import { CardUser } from "../CardUser/CardUser";
import style from './SomeUsers.module.css'

type Props = {
  users: IUserModel[]
  title: string;
}

/**
 * ShowUsers Component
 * @param {Props} props props of component
 * @property {IUserModel[]} users list user to render
 * @returns {JSX.Element} Component to render
 */
const ShowUsersComponent: FunctionComponent<Props> = ({users, title}) => {
  return (
    <div className={style.container}>
      {console.log('render SomeUsersComponent')}
      <p className={style.title}>{title}</p>
      <div className={style.container_user}>
        {
          users.map((user, idx) => (
            <CardUser key={idx} user={user} />
          ))
        }
      </div>
    </div>
  )
}

export const ShowUsers = React.memo(ShowUsersComponent)

