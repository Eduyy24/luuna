import React, { FunctionComponent } from "react";
import { CardSearch } from "../../components/CardSearch/CardSearch";
import { Layout } from "../../components/Layout/Layaut";
import IUserModel from "../../models/UserModel";
import { OnChangeFuntion } from "../../utils/types";

export const getServerSideProps = async () => {
  const alwaysUser: IUserModel[] = []
  return {
    props: {
      alwaysUser,
    }
  }
}
const Users: FunctionComponent = () => {
  const onClickSearch = () => {}
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
        <span>holas</span>
      </CardSearch>
    </Layout>
  )
}

export default Users;