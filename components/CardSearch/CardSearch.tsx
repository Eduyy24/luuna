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
  isLoading: boolean
}

/**
 * CardSearch Component
 * Wrapper for result to search in component
 * @property {JSX.Element} children Elemento to render un compornent
 * @property {string} title text for title in component
 * @property {EmptyFuntion} onClickSearch Callback for event click in search
 * @property {OnChangeFuntion} onChangeInput Callback for canhe event in input to search
 * @property {boolean} isLoading state of load for request, display in input
 * @returns {JSX.Element} Element to render
 */
export const CardSearch: FunctionComponent<CardSearchProps> = ({
  children,
  title,
  onClickSearch,
  onChangeInput,
  isLoading,
}) => {
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <div className={style.container_inputs}>
        <div className={`control ${isLoading ? 'is-loading' : ''}`}>
          <input onChange={onChangeInput} className="input is-rounded" type="text" placeholder="Buscar" />
        </div>
        <button onClick={onClickSearch}>
          <Image  src={iconSearch} alt='icon search' height={30} width={30} />
        </button>
      </div>
      {children}
    </div>
  )
}