import Image from "next/image";
import React, { FunctionComponent } from "react";
import IRepoModel from "../../../models/RepoModel";
import style from './CardRepo.module.css'
import iconCode from '../../../public/svg/icon-repository.svg'

type Props = {
  repo: IRepoModel
}

/**
 * CardRepo Component
 * Render info of repo
 * @param {Props} props props of component
 * @property {IRepoModel} user repo to render
 * @returns {JSX.Element} Component to render
 */
export const CardRepo: FunctionComponent<Props> = ({repo}) => {
  return (
    <div className={style.container}>
      <p>
        <a target='_blank' rel='noreferrer' href={repo.owner.html_url}>{repo.owner.login}</a>
        <Image src={repo.owner.avatar_url} alt='avatar user' width={20} height={20} />
      </p>
      <a target='_blank' rel='noreferrer' href={repo.html_url}>{repo.name}</a>
      <p>{repo.description}</p>
      <div>
        <Image alt="icon-button" src={iconCode} height={20} width={20} />
        <span>{repo.language}</span>
      </div>
    </div>
  )
}