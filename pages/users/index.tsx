import React, { useState } from "react";
import axios from "axios";
import { CardSearch } from "../../components/CardSearch/CardSearch";
import { Layout } from "../../components/Layout/Layaut";
import IUserModel from "../../models/UserModel";
import { OnChangeFuntion } from "../../utils/types";
import { SomeUsers } from "../../components/Users/SomeUsers/SomeUsers";

export const getServerSideProps = async () => {
  let someUsers: IUserModel[] = [];
  try {
    const {data} = await axios.get('https://api.github.com/users?page=1&per_page=10')
    someUsers = data;
  } catch (error) {
    console.error(error)
  }
  return {
    props: {
      someUsers,
    }
  }
}

/**
 * Users Page
 * route="/users"
 * @property {IUserModel[]} someUsers List of users for show prev
 * @returns {JSX.Element} Page to render
 */
const Users = ({someUsers}: {someUsers: IUserModel[]}) => {
  const [users, setUsers] = useState<IUserModel[]>([])
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)


  /**
   * Search user receive in the api of github and return up to 10 matches
   * @param {string} user Name to search
   */
  const searchUser = async (user: string) => {
    const api = `https://api.github.com/search/users?q=${user}&page=1&per_page=10`
    try {
      const {data} = await axios.get(api)
      setUsers(data.items)
    } catch (error) {
      console.error(error)
      alert('Lo sentimos, ocurrio un error')
    }
  }

  const onClickSearch = async () => {
    setLoading(true);
    if(inputText.trim() === '') {
      setUsers([]);
    } else {
      await searchUser(inputText);
    }
    setLoading(false);
  }

  const onChangeInput: OnChangeFuntion = (e) => {
    setInputText(e.target.value);
  }

  return (
    <Layout>
      <CardSearch
        title="Usuarios"
        onClickSearch={onClickSearch}
        onChangeInput={onChangeInput}
        isLoading={loading}
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