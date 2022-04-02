import Image from "next/image";
import React, { FunctionComponent } from "react";
import style from './CardSearch.module.css';
import iconSearch from '../../public/svg/icon-search.svg'
import { EmptyFuntion, OnChangeFuntion } from "../../utils/types";

type CardSearchProps = {
  children: JSX.Element;
  title: string;
  onClickSearch: EmptyFuntion;
  onChangeInput: OnChangeFuntion;
}

/**
 * CardSearch Component
 * Wrapper for result to search in component
 * @returns {JSX.Element} Element to render
 */
export const CardSearch: FunctionComponent<CardSearchProps> = ({
  children,
  title,
  onClickSearch,
  onChangeInput
}) => {
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <div className={style.container_inputs}>
        <input onChange={onChangeInput} className="input is-rounded" type="text" placeholder="Buscar" />
        <button onClick={onClickSearch}>
          <Image  src={iconSearch} alt='icon search' height={30} width={30} />
        </button>
      </div>
      {children}
    </div>
  )
}