import React from "react"
import { Link } from "gatsby"

import style from "./header.module.css"

const Header = () => (
  <header id="site-header" className={style.masthead} role="banner">
    <div className={style.masthead_info}>
      <Link to="/">
        <img
          src="/logo.svg"
          width="366"
          height="374"
          alt="24x24 Logo"
          className={style.site_logo}
        />
        <h1 className={style.page__heading}>Photo Marathon</h1>
        <div className={style.page__subhead}>May 24, 2020, Planet Earth</div>
      </Link>
    </div>
  </header>
)

export default Header
