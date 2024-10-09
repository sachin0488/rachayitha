import React from 'react'
import { useSpecificContestService } from '../service/Schedule.service'
import Link from 'next/link'

const Hero = () => {
  const { data: contestData } = useSpecificContestService()

  return (
    <section className="banner-section">
      <div className="section_wrapper">
        <div className="dg gtc2 ml64 mr64  db-m ml-m-16 mr-m-16">
          <div>
            <h1 className="ff_ubuntu ttu fs56 fs-l-48 fs-m-28 mb8 mt-l-0 lh1d3 ">
              {contestData?.contest_name} <span className="c_primary">{contestData?.contest_highlight}</span>
              <i className="title-new"></i>
            </h1>
            <small className="ff_gh lh1d3 fs24 fs-l-20 fs-m-16 c_primary title-decorate">Organized by {contestData?.organiser_name}</small>

            <img className="w100p dn db-m mt24 mb24" src={contestData?.organiser_logo1} alt="" />
            <div className="border-bottom-primary-reverse mb20 dn-m"></div>
            <p className="mb20 mb-m-16 fs16 fs-m-14 lh1d5 lh-m-1d57">{contestData?.contest_description}</p>
            <div className="header-icons">
              <div className="df mb16 aic">
                {/* <div className="header-icon-img mr8">
                                    <img style={{ filter: 'hue-rotate(281deg)' }} src="/rachayitha_spirity/1677564804_362584.png" width="36" height="36" />
                                </div> */}
                {/* <div>
                                    <strong className="db ff_ubuntu fs24 fs-m-16 lh1d5">Newbie Prize</strong>
                                    <small className="fs16 fs-m-14 lh1d5">Exclusive track for WebNovel newbie authors.</small>
                                </div> */}
              </div>
              <div className="df mb40 aic">
                <div className="header-icon-img mr8">
                  <img style={{ filter: 'hue-rotate(281deg)' }} src="/rachayitha_spirity/1677564806_948592.png" width="36" height="36" />
                </div>
                <div>
                  <strong className="db ff_ubuntu fs24 fs-m-16 lh1d5">{contestData?.prizepool} INR</strong>
                  <small className="fs16 fs-m-14 lh1d5">Total Prize Pool</small>
                </div>
              </div>
              <Link
                href="https://inkstone.webnovel.com/essaycontest.html?contestId=597&amp;contestName=Webnovel%20Spirity%20Awards%202024&amp;wsa=1"
                target="_blank">
                <a
                  className="btn br60 click_join_now"
                  dangerouslySetInnerHTML={{
                    __html: `
                    <span className="vam mr8 dib">JOIN NOW</span>
                    <svg className="vam" width="20" height="20">
                      <use xlink:href="#i-arrow-right"></use>
                    </svg>`,
                  }}></a>
              </Link>
            </div>
          </div>
          <div
            className="header-illustrator dn-m"
            style={{
              backgroundImage: `url(${contestData?.organiser_logo1})`,
            }}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
