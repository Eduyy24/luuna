import React, { useState } from "react";
import axios from "axios";
import { CardSearch } from "../../components/CardSearch/CardSearch";
import { Layout } from "../../components/Layout/Layaut";
import IUserModel from "../../models/UserModel";
import { OnChangeFuntion } from "../../utils/types";
import { SomeUsers } from "../../components/Users/SomeUsers/SomeUsers";

export const getServerSideProps = async () => {
  const response = await axios.get('https://api.github.com/users?page=1&per_page=10')
  return {
    props: {
      someUsers: response.data,
    }
  }
}
const Users = ({someUsers}: {someUsers: IUserModel[]}) => {
  const [users, setUsers] = useState<IUserModel[]>([])
  const onClickSearch = () => {
    console.log('someUsers', someUsers);
  }
  const onChangeInput: OnChangeFuntion = (e) => {
    console.log(e.target.value);
  }

  return (
    <Layout>
      <CardSearch
        title="Usuarios"
        onClickSearch={onClickSearch}
        onChangeInput={onChangeInput}
      >
        <>
          {
            users.length ? (
              <div></div>
            ) : (
              <SomeUsers users={someUsers} />
            )
          }
        </>
      </CardSearch>
    </Layout>
  )
}

export default Users;