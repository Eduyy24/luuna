import axios from "axios";
import React, { useState } from "react";
import { CardSearch } from "../../components/CardSearch/CardSearch";
import { Layout } from "../../components/Layout/Layaut";
import { ShowRepos } from "../../components/Repos/ShowRepos/ShowRepos";
import IRepoModel from "../../models/RepoModel";
import { OnChangeFuntion } from "../../utils/types";

export const getServerSideProps = async () => {
  let someRepos: IRepoModel[] = [];
  try {
    const {data} = await axios.get('https://api.github.com/search/repositories?q=a&page=1&per_page=10')
    someRepos = data.items;
  } catch (error) {
    console.error(error)
  }
  return {
    props: {
      someRepos,
    }
  }
}

const Repos = ({someRepos}: {someRepos: IRepoModel[]}) => {
  const [repos, setRepos] = useState<[]>([])
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)

  const searchUser = async (repo: string) => {
    const api = `https://api.github.com/search/repositories?q=${repo}&page=1&per_page=10`
    try {
      const {data} = await axios.get(api)
      setRepos(data.items)
    } catch (error) {
      console.error(error)
      alert('Lo sentimos, ocurrio un error')
    }
  }

  const onClickSearch = async () => {
    setLoading(true);
    if(inputText.trim() === '') {
      setRepos([]);
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
        title="Repositorios"
        onClickSearch={onClickSearch}
        onChangeInput={onChangeInput}
        isLoading={loading}
      >
        <>
          {
            repos.length ? (
              <div></div>
            ) : (
              <ShowRepos title="...aquí algunos repositorios" repos={someRepos} />
            )
          }
        </>
      </CardSearch>
    </Layout>
  )
}

export default Repos;