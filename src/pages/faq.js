import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./faq.module.css"

const IndexPage = () => {
  return (
    <Layout page={true}>
      <SEO
        title="24x24 Photo Marathon, May 24, 2020"
        description="A World-Wide Photo Event Happening Online"
        image="/logo.png"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />

      <section className={style.wrapper} id="primary">
        <h1 className={style.page__heading}>Frequently Asked Questions</h1>
        <p>You have questions. Here are (some of) the answers:</p>
        <ul className={style.qlist}>
          <li>
            <a href="#contact">How do I contact the 24x24 Photo Marathon?</a>
          </li>
          <li>
            <a href="#whatis">What is a photo marathon?</a>
          </li>
          <li>
            <a href="#different">How is the 24x24 Photo Marathon different?</a>
          </li>
          <li>
            <a href="#when">When does the event start?</a>
          </li>
          <li>
            <a href="#register">Do I need to register to participate?</a>
          </li>
          <li>
            <a href="#how">How do I participate?</a>
          </li>
          <li>
            <a href="#where">Where does it take place?</a>
          </li>
          <li>
            <a href="#hashtags">
              Will you see my photos if I use more hashtags?
            </a>
          </li>
          <li>
            <a href="#misspell">
              Will you see my photos if I misspell the hashtags?
            </a>
          </li>
          <li>
            <a href="#break">Can I take breaks during the marathon?</a>
          </li>
          <li>
            <a href="#prizes">Are there prizes to be won?</a>
          </li>
          <li>
            <a href="#photographer">
              Can I participate even if I'm not a photographer?
            </a>
          </li>
          <li>
            <a href="#camera">
              Can I participate even if I don't have a fancy camera?
            </a>
          </li>
          <li>
            <a href="#hour">
              Do I need to submit the photos within the hour that the theme was
              announced?
            </a>
          </li>
          <li>
            <a href="#edit">Can I edit my photos before submitting them?</a>
          </li>
          <li>
            <a href="#rules">
              Are there any rules about what can/can't be in the photos?
            </a>
          </li>
          <li>
            <a href="#medal">
              Do I get a medal for completing the photo marathon?
            </a>
          </li>
        </ul>
        <section className={style.answers}>
          <div
            id="contact"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="contact">
              How do I contact the 24x24 Photo Marathon?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                You can contact us in two ways: Either through Twitter{" "}
                <a href="https://twitter.com/24x24photo">@24x24photo</a> or by
                sending an email to info [at] 24x24photomarathon [dot] com.
              </p>
            </div>
          </div>
          <div
            id="whatis"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">What’s a photo marathon?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                All{" "}
                <a href="https://en.wikipedia.org/wiki/Photomarathon">
                  photo marathons
                </a>{" "}
                are a little different, but they generally follow the same basic
                idea: At a given date and time, a bunch of photographers get
                together and are given a theme for the hour. Each photographer
                takes a photo that captures their own special interpretation of
                the theme and submit it to the event organizers. The
                photographers come back for another theme at the start of the
                next hour, and the next, and so on until all the hours are up
                and all the photos are submitted! Most photo marathons last 12
                hours and include 12 themes.
              </p>
            </div>
          </div>
          <div
            id="different"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">How is the 24x24 Photo Marathon different?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                The 24x24 Photo Marathon is different in 4 ways: First, it takes
                place around the world at the same time, starting on May 24,
                2020 at 00:00 UTC. Second, it lasts 24 hours as opposed to the
                traditional 12 hours. Third, the event is entirely online and
                open to anyone and everyone. Fourth and finally, there is no
                judging and no prizes in this event. The event is strictly for
                fun (and we’re serious about this!).
              </p>
            </div>
          </div>
          <div
            id="when"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">When does the event start?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                Sunday May 24, 2020 at 00:00 UTC (i.e. midnight when May 23
                turns to May 24 at Coordinated Universal Time).
              </p>
            </div>
          </div>
          <div
            id="register"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">Do I need to register to participate?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                You do not need to register to take part in the 24x24 Photo
                Marathon. Posting photos with the correct hashtags makes you
                part of the event.
              </p>
            </div>
          </div>
          <div
            id="how"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">How do I participate?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                There are 3 steps to participate:
                <ol>
                  <li>
                    For 24 hours beginning May 24, 2020 at 00:00 UTC, check this
                    website or Twitter (
                    <a href="https://twitter.com/24x24photo">
                      <span className={style.tag}>@24x24photo</span>
                    </a>
                    ) for themes.
                  </li>
                  <li>
                    Interpret the themes and take one photo for each theme.
                  </li>
                  <li>
                    Upload your photos to Twitter or Instagram with the
                    following 2 tags:{" "}
                    <span className={style.tag}>#24x24photomarathon</span>, and
                    the hashtag for the theme (i.e.{" "}
                    <span className={style.tag}>#24x24theme01</span> for your
                    photo of the first theme,{" "}
                    <span className={style.tag}>#24x24theme02</span> for your
                    photo of the second theme, …
                    <span className={style.tag}>#24x24theme24</span> for your
                    photo of the last theme).
                  </li>
                </ol>
              </p>
            </div>
          </div>
          <div
            id="where"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">Where does it take place?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                Wherever you are right now! The 24x24 Photo Marathon takes place
                entirely online. You can participate from anywhere in the world
                as long as you have access to an Internet connection (to view
                themes and post photos).
              </p>
            </div>
          </div>
          <div
            id="hashtags"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Will you see my photos if I use more hashtags?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                Yes, you can add as many unrelated hashtags to your posts as you
                want (e.g. <span className={style.tag}>#photography</span>,{" "}
                <span className={style.tag}>#TravelTheWorld</span>). As long as
                you tag your photo with BOTH of the following 2 tags, they will
                appear on this website:
                <ol>
                  <li>
                    <span className={style.tag}>#24x24photomarathon</span>
                  </li>
                  <li>
                    The theme tag (i.e.{" "}
                    <span className={style.tag}>#24x24theme01</span> for your
                    photo of the first theme,{" "}
                    <span className={style.tag}>#24x24theme02</span> for your
                    photo of the second theme, …{" "}
                    <span className={style.tag}>#24x24theme24</span> for your
                    photo of the last theme)
                  </li>
                </ol>
              </p>
            </div>
          </div>
          <div
            id="misspell"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Will you see my photos if I misspell the hashtags?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                Probably not. If you add extra digits to a hashtag or misspell
                it, we may not see your photo submissions. All photos should
                have BOTH the{" "}
                <span className={style.tag}>#24x24photomarathon</span> hashtag
                AND ONE of the following theme hashtags:
                <ol>
                  <li>
                    <span className={style.tag}>#24x24theme01</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme02</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme03</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme04</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme05</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme06</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme07</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme08</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme09</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme10</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme11</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme12</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme13</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme14</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme15</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme16</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme17</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme18</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme19</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme20</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme21</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme22</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme23</span>
                  </li>
                  <li>
                    <span className={style.tag}>#24x24theme24</span>
                  </li>
                </ol>
              </p>
            </div>
          </div>
          <div
            id="break"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">Can I take breaks during the marathon?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                Yes! We don’t expect everyone to stay up for 24 hours straight
                taking photos! Take breaks. Take naps. Eat.
              </p>
            </div>
          </div>
          <div
            id="prizes"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">Are there prizes to be won?</h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                If you consider pride, honour, and bragging rights prizes, then
                yes! (Otherwise no, there are no official prizes to be handed
                out. We just think this will be fun!)
              </p>
            </div>
          </div>
          <div
            id="photographer"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Can I participate even if I'm not a photographer?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">Yes! Absolutely! All are welcome!</p>
            </div>
          </div>
          <div
            id="camera"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Can I participate even if I don't have a fancy camera?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                Yes! You don’t need a fancy camera to participate – any camera
                or other device with photo capabilities will do!
              </p>
            </div>
          </div>
          <div
            id="hour"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Do I need to submit the photos within the hour that the theme was
              announced?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                No, but it would be a lot cooler if you did! As long as all 24
                of your photos are posted with hashtags before midnight (0:00
                UTC May 25, 2020), you’ve officially completed the race! High
                five!
              </p>
            </div>
          </div>
          <div
            id="edit"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Can I edit my photos before submitting them?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                Yes, you can edit your photos, but if you want to stay true to
                the Photo Marathon concept, post your photos without filters and
                editing.
              </p>
            </div>
          </div>
          <div
            id="rules"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Are there any rules about what can/can't be in the photos?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                There are rules and policies in place for what can be posted on{" "}
                <a href="https://help.twitter.com/en/rules-and-policies/twitter-rules">
                  Twitter
                </a>{" "}
                and{" "}
                <a href="https://help.instagram.com/477434105621119">
                  Instagram
                </a>
                . If an image can’t be shown on Twitter or Instagram because it
                doesn’t adhere to their policies, it will not be part of the
                24x24 Photo Marathon. If you’d like to take part in this event,
                please keep in mind that these social media platforms enforce
                their content policies.
              </p>
            </div>
          </div>
          <div
            id="medal"
            className={style.answer}
            itemscope
            itemprop="mainEntity"
            itemtype="https://schema.org/Question"
          >
            <h2 itemprop="name">
              Do I get a medal for completing the photo marathon?
            </h2>
            <div
              itemscope
              itemprop="acceptedAnswer"
              itemtype="https://schema.org/Answer"
            >
              <p itemprop="text">
                There are no prizes for this event, nor are there medals. That
                doesn't prevent you from making your own and posting a photo of
                it though!
              </p>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default IndexPage
