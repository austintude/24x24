import React from "react"

import { ReactComponent as Logo } from "../../static/logo.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="The home page"
        description="You can customize the SEO text here."
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <div className={style.feature}>
        <div className={style.feature__info}>
          <Logo />
          <h1 className={style.feature__heading}>Photo Marathon</h1>
          <div className={style.feature__subhead}>
            May 24, 2020, Planet Earth
          </div>
        </div>
      </div>
      <section className={style.wrapper} id="primary">
        <div>
          <h1 className={style.heading}>24 Hours, 24 Themes, 24 Photos</h1>
          <p>Welcome to the first ever 24 hour world-wide photo marathon!</p>
          <p>
            What is a photo marathon you ask? Photo marathons have many
            variants, but the main idea is always the same:
          </p>
          <p>
            On a given date and time, photographers assemble at a chosen
            location and are given a theme for the hour. They then go out in the
            world, take a photo to interpret this theme, and submit it to the
            event. Then they return for the next hour to get another theme and
            so on. Over 12 hours, they produce 12 photos interpreting 12
            different themes.
          </p>
          <h2>How is 24x24 Photo Marathon different?</h2>
          <p>
            This event is a bit different. First, it is happening all over the
            world at the same time, starting on May 24th, 2020, at 00:00UTC when
            the first theme will be announced here on the site and on{" "}
            <a href="https://twitter.com/24x24photomarathon">Twitter</a>.
            Second, it is a 24 hour event meaning at the top of each hour, for
            24 hours, a new theme will be announced. Third, the event is
            entirely online and open to anyone and everyone: All you need to do
            to take part is interpret the theme for the hour and post it on
            Twitter or Instagram using the hashtag for the current theme (eg.
            #24x24theme02 for theme 2) and the officla hashtag
            #24x24photomarathon. Fourth and finally, unlike other photo
            marathons, there are no prizes in this event. This is for fun and
            community, nothing else.
          </p>
          <h2>Who is behind this?</h2>
          <p>
            The 24x24 Photo Marathon is the brain child of photographer and
            photo marathon organizer Morten Rand-Hendriksen. He always wanted to
            organize a world-wide photomarathon over 24 hours to see how people
            in different parts of the globe interpret the same themes.
          </p>
          <p>The event is organized by [insert team members here].</p>
          <p>
            24x24 Photo Marathon is not part of a promotional campaign or
            anything like that. It is purely for the joy of photography. You
            sign up for nothing by taking part, and you will not be asked to
            relinquish your rights or priveleges or email address or anything
            else.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
