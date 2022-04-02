import React, { FunctionComponent } from "react";
import IRepoModel from "../../../models/RepoModel";
import { CardRepo } from "../CardRepo/CardRepo";
import style from './ShowRepos.module.css'

type Props = {
  repos: IRepoModel[]
  title: string;
}

/**
 * ShowRepos Component
 * @param {Props} props props of component
 * @property {IRepoModel[]} repos list repos to render
 * @returns {JSX.Element} Component to render
 */
const ShowReposComponent: FunctionComponent<Props> = ({repos, title}) => {
  return (
    <div className={style.container}>
      {console.log('render ShowReposComponent')}
      <p className={style.title}>{title}</p>
      <div className={style.container_repo}>
        {
          repos.map((repo, idx) => (
            <CardRepo key={idx} repo={repo} />
          ))
        }
      </div>
    </div>
  )
}

export const ShowRepos = React.memo(ShowReposComponent)

