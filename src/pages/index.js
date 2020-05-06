import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fundraiser from "../components/fundraiser"
import style from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="24x24 Photo Marathon, May 24, 2020"
        description="A World-Wide Photo Event Happening Online"
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />

      <section className={style.wrapper} id="primary">
        <div>
          <p className={style.lede}>
            Welcome to the first ever 24 Hour World-Wide Photo Marathon!
          </p>
          <p>
            What's this all about you ask? The answer can be summed up in three
            simple sentences:
          </p>
          <blockquote className={style.quote}>
            24 Hours
            <br /> 24 Themes
            <br />
            24 Photos
          </blockquote>
          <p>
            On{" "}
            <a href="https://www.timeanddate.com/worldclock/converter.html?iso=20200524T000000&p1=1440">
              May 24, 2020 at exactly 00:00UTC (click to convert this time to
              your timezone)
            </a>{" "}
            a theme will be announced on this website and on{" "}
            <a href="https://twitter.com/24x24photomarathon">Twitter</a>, and
            for the next 23 hours another theme will be annouced every hour.
          </p>
          <p>
            Your challenge is to grab your camera or smartphone, interpret the
            theme in a single photo, and post it to Twitter or Instagram using
            the hashtag for the current theme (eg. #24x24theme02 for theme 2)
            and the officla hashtag #24x24photomarathon.
          </p>
          <h2>Photo Marathon?!?</h2>
          <p>
            <a href="https://en.wikipedia.org/wiki/Photomarathon">
              Photo Marathons
            </a>{" "}
            (aka "photomarathons") have been around for decades taking place in
            different cities all over the world. While every photo marathon is
            unique, they are all variations on the same basic idea:
          </p>
          <p>
            At a given date and time, photographers assemble at a chosen
            location and are given a theme for the hour. They then go out in the
            world, take a photo to interpret this theme, and submit it to the
            event. Then they return for the next hour to get another theme and
            so on. Over 12 hours, they produce 12 photos interpreting 12
            different themes.
          </p>
          <h2>How is 24x24 Photo Marathon different?</h2>
          <p>
            This event is a bit different. First, it is happening all over the
            world at the same time, starting on May 24th, 2020, at 00:00UTC.
            Second, it lasts 24 hours as opposed to the traditional 12. Third,
            the event is entirely online and open to anyone and everyone: All
            you need to do to take part is interpret the theme for the hour and
            post it on Twitter or Instagram using the hashtag for the current
            theme (eg. #24x24theme02 for theme 2) and the officla hashtag
            #24x24photomarathon. Fourth and finally, unlike other photo
            marathons, there is no judging, and there are no prizes in this
            event. This is for fun and community, nothing else.
          </p>
          <h2>Who is behind this?</h2>
          <p>
            The 24x24 Photo Marathon is the brain child of photographer and
            photo marathon organizer Morten Rand-Hendriksen. He always wanted to
            organize a world-wide photomarathon over 24 hours to see how people
            in different parts of the globe interpret the same themes.
          </p>
          <p>
            The event is organized by a community of photographers and
            technologists.
          </p>
          <p>
            24x24 Photo Marathon is not part of a promotional campaign or
            anything like that. It is purely for the joy of photography. You
            sign up for nothing by taking part, and you will not be asked to
            relinquish your rights or priveleges or email address or anything
            else.
          </p>
        </div>
      </section>
      <Fundraiser />
    </Layout>
  )
}

export default IndexPage
