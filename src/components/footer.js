import React from "react"

import style from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={style.colophon}>
    <aside className={style.getInvolved}>
      <h3>Get involved!</h3>
      <p>
        24x24 is looking for collaborators including web developers and
        photographers. If you're interested in contributing to this event, send
        an email to 24x24photomarathon at gmail or{" "}
        <a href="https://github.com/mor10/24x24/">jump into the GitHub Repo</a>!
      </p>
    </aside>
    © {new Date().getFullYear()} {siteTitle}
  </footer>
)

export default Footer
