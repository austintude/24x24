import React from "react"
import Moment from "react-moment"
import "moment-timezone"

import style from "./timezone.module.css"

const Timezone = () => {
  const dateToFormat = "2020-05-24T00:00-0000"
  const timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone
  return (
    <div className={style.timezone}>
      <div className={style.timezone__heading}>{timezone} start time:</div>
      <div className={style.timezone__time}>
        <Moment format="LLLL">{dateToFormat}</Moment>
      </div>
    </div>
  )
}

export default Timezone
