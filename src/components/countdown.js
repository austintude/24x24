import React, { useEffect, useState } from "react"

import style from "./countdown.module.css"

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-05-24") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        d:
          Math.floor(difference / (1000 * 60 * 60 * 24)) > 0
            ? Math.floor(difference / (1000 * 60 * 60 * 24))
            : "0",
        h:
          Math.floor((difference / (1000 * 60 * 60)) % 24) > 0
            ? Math.floor((difference / (1000 * 60 * 60)) % 24)
            : "0",
        m:
          Math.floor((difference / 1000 / 60) % 60) > 0
            ? Math.floor((difference / 1000 / 60) % 60)
            : "0",
        s:
          Math.floor((difference / 1000) % 60) > 0
            ? Math.floor((difference / 1000) % 60)
            : "0",
      }
    }

    return timeLeft
  }

  const outputTime = timeLeft => {
    if (timeLeft === null) {
      return "00"
    } else {
      return (timeLeft < 10 ? "0" : "") + timeLeft
    }
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span key={interval + timeLeft[interval]}>
        {outputTime(timeLeft[interval])}
        {interval}{" "}
      </span>
    )
  })

  return (
    <div className={style.countdown}>
      <div className={style.countdown__header}>First theme announced in:</div>
      <div className={style.countdown__time}>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  )
}

export default Countdown
