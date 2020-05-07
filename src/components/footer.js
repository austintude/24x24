import React from "react"

import style from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={style.colophon}>
    <aside className={style.getInvolved}>
      <h3>Get involved!</h3>
      <p>
        24x24 is looking for collaborators including web developers and
        photographers. If you're interested in contributing to this event, send
        an email to info [at] 24x24photomarathon [dot] com or{" "}
        <a href="https://github.com/mor10/24x24/">jump into the GitHub Repo</a>!
      </p>
    </aside>
    <aside className={style.credits}>
      The 24x24 website is set with{" "}
      <a href="https://github.com/TypeNetwork/Amstelvar">Amstelvar</a> and{" "}
      <a href="https://www.recursive.design/">Recursive</a> and powered by{" "}
      <a href="https://www.gatsbyjs.org/">Gatsby</a>.{" "}
      <a href="https://github.com/mor10/24x24">Source</a>.
    </aside>
    © {new Date().getFullYear()} {siteTitle}
  </footer>
)

export default Footer
