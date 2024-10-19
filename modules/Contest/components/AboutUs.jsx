import React from 'react'
import { useSpecificContestService } from '../service/Schedule.service'

const About = () => {
  const { data: contestData } = useSpecificContestService()

  return (
    <div>
      <section className="about-us-section" id="AboutUs">
        <div className="section_wrapper">
          <div className="ml64 mr64 ml-m-16 mr-m-16">
            <h2 className="ff_ubuntu ttu fs48 fs-m-24 mb20 mb-m-8">about us</h2>
            <div className="dg gtc12 gap36 db-m mb36 mb-m-32">
              <p className="gc1-8 fs16 fs-m-14 lh1d5 lh-m-1d57">
                Welcome to Rachayitha, an online platform where readers and writers come together. Here, you can turn your love for writing
                into money. Join us to start earning from your writing skills today! Our mission is to give book lovers a place to read,
                write, share their stories, and connect with others who share the same passion. To become the leading platform for literary
                creativity, inspiring and empowering a global community of readers and writers. To nurture talent, promote literary works,
                and create a vibrant ecosystem where creativity flourishes.
              </p>
            </div>
            <div className="dg gtc3 aic gap36 gtc-m-3 logo-group">
              <img className="w80p" src={contestData?.organiser_logo2} />
              <img className="w80p" src={contestData?.organiser_logo3} />
              <img className="w80p" src={contestData?.organiser_logo4} />
              <img className="w80p" src={contestData?.organiser_logo5} />
              <img className="w80p" src={contestData?.organiser_logo6} />
            </div>
          </div>
        </div>
      </section>
      <section className="join-us-section">
        <div className="section_wrapper">
          <div className="pr ml64 mr64 ml-m-16 mr-m-16">
            <h2 className="ff_ubuntu fs48 fs-m-24 mb8 mb-m-4">Anyone can be an author. </h2>
            <small className="db ff_gh fs24 fs-m-16 mb36 mb-m-24">Perhaps the next best-seller will be your book!</small>
            <a
              className="btn _white br60"
              href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/workspace/${
                contestData?.contest_type === 'book' ? 'novel' : 'poem'
              }/create?contest_id=${contestData?.id}`}
              target="_blank"
              rel="noreferrer"
              dangerouslySetInnerHTML={{
                __html: `
              <span class="vam mr8 dib">join us</span>
              <svg class="vam" width="20" height="20">
                <use xlink:href="#i-arrow-right"></use>
              </svg>`,
              }}></a>
            <img className="pa t0 r0" src="/contest/1640612183_580495.png" width="48px" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
