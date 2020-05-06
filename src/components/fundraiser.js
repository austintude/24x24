import React from "react"
import { ReactComponent as MSFLogo } from "../../content/images/msf.svg"
import { ReactComponent as WHOLogo } from "../../content/images/who.svg"

import style from "./fundraiser.module.css"

const Fundraiser = () => {
  return (
    <aside className={style.fundraiser}>
      <div className={style.fundraiser__text}>
        <h2 className={style.fundraiser__heading}>
          Support COVID-19 efforts world-wide
        </h2>
        <div className={style.fundraiser__blurb}>
          24x24 Photo Marahont is not a fundraiser. However, if you want to
          contribute to the world-wide effort to curb COVID-19, we recommend
          donating to one of the following organizations:
        </div>
      </div>
      <div className={style.orgs}>
        <div className={style.orgs__single}>
          <figure className={style.orgs__image}>
            <WHOLogo />
          </figure>
          <h3 className={style.orgs__heading}>World Health Organization</h3>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate">
            Donate
          </a>
        </div>
        <div className={style.orgs__single}>
          <figure className={style.orgs__image}>
            <MSFLogo />
          </figure>
          <h3 className={style.orgs__heading}>Doctors Without Borders</h3>
          <a href="https://www.msf.org/donate">Donate</a>
        </div>
      </div>
    </aside>
  )
}

export default Fundraiser
