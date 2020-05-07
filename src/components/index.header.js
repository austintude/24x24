import React from "react"

import { ReactComponent as Logo } from "../../static/logo.svg"
import style from "./header.module.css"

const IndexHeader = () => {
  return (
    <header className={style.feature}>
      <div className={style.feature__info}>
        <Logo />
        <h1 className={style.feature__heading}>Photo Marathon</h1>
        <div className={style.feature__subhead}>May 24, 2020, Planet Earth</div>
      </div>
    </header>
  )
}

export default IndexHeader
