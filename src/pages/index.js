import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fundraiser from "../components/fundraiser"
import style from "./index.module.css"

const IndexPage = () => {
  return (
    <Layout page={false}>
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
            Welcome to the 2020 24 Hour World-Wide Photo Marathon!
          </p>
          <p>
            What's this all about you ask? The answer can be summed up in three
            simple sentences (or you can <Link to="/faq">visit the FAQ</Link>{" "}
            for more info):
          </p>
          <blockquote className={style.quote}>
            24 Hours
            <br /> 24 Themes
            <br />
            24 Photos
          </blockquote>
          <h2>24 Hours</h2>
          <p>
            The competition begins at precisely{" "}
            <a href="https://www.timeanddate.com/worldclock/converter.html?iso=20200524T000000&p1=1440">
              00:00UTC (click to convert this time to your timezone) on May 24,
              2020
            </a>{" "}
            and will last exactly 24 hours.
          </p>
          <h2>24 Themes</h2>
          <p>
            One theme will be announced on this website and on{" "}
            <a href="https://twitter.com/24x24photomarathon">Twitter</a> at the
            start of each hour beginning May 24, 2020 at 00:00 UTC until all 24
            themes have been revealed.
          </p>
          <h2>24 Photos</h2>
          <p>
            By the end of the competition, marathoners around the globe will
            have submitted 24 photos on either Twitter or Instagram tagged with
            theme number hashtags (e.g. #24x24theme01 for the first theme,
            #24x24theme02 for the second theme, etc.) and the official
            #24x24photomarathon event hashtag.
          </p>
          <h2>A Photo Marathon?!?</h2>
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
          <h2>Who is behind this?</h2>
          <p>
            The 24x24 Photo Marathon is the brainchild of photographer and{" "}
            <a href="http://vancouverphotomarathon.com">
              12x12 Vancouver Photo Marathon
            </a>{" "}
            organizer Morten Rand-Hendriksen. Some people like running
            marathons, travelling internationally, or taking photos. Somewhere
            along the way Morten got things a bit mixed up and decided he wanted
            to organize a 24-hour international photo marathon instead.
          </p>
          <p>
            Morten is curious to see how people around the globe will interpret
            the same 24 themes to develop uniquely different and creative
            images. The community of photographers and technologists working
            with him to produce this event are just as curious to see what you
            come up with!
          </p>
          <p>
            The 24x24 Photo Marathon is not part of any promotional campaign and
            is not affiliated with any organization. It’s a fun competition
            created purely for the joy of photography. By signing up to take
            part, you are simply signing up to take part (nothing else). You
            will not be asked to relinquish any rights or privileges to your
            images.
          </p>
        </div>
      </section>
      <Fundraiser />
    </Layout>
  )
}

export default IndexPage
