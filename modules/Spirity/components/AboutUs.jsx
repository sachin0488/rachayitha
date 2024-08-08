import React from "react";


const About = () => {
    return (
        <div>
            <section className="about-us-section" id="AboutUs">
                <div className="section_wrapper">
                    <div className="ml64 mr64 ml-m-16 mr-m-16">
                        <h2 className="ff_ubuntu ttu fs48 fs-m-24 mb20 mb-m-8">about us</h2>
                        <div className="dg gtc12 gap36 db-m mb36 mb-m-32">
                            <p className="gc1-8 fs16 fs-m-14 lh1d5 lh-m-1d57">
                                WebNovel is the international branch of Tencent Holdings Ltd&apos;s China Literature Ltd. Launched in May 2017, WebNovel has
                                established an interactive online reading experience as its core while being an online literature platform that combines
                                copyright licensing and cooperation.
                            </p>
                        </div>
                        <div class="dg gtc3 aic gap36 gtc-m-3 logo-group">
                            <img className="w80p" src="/rachayitha_spirity/1640774442_653863.png" />
                            <img className="w80p" src="/rachayitha_spirity/1640774442_219848.png" />
                            <img className="w80p" src="/rachayitha_spirity/1698050023_681270.png" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="join-us-section">
                <div class="section_wrapper">
                    <div class="pr ml64 mr64 ml-m-16 mr-m-16">
                        <h2 class="ff_ubuntu fs48 fs-m-24 mb8 mb-m-4">Anyone can be an author. </h2>
                        <small class="db ff_gh fs24 fs-m-16 mb36 mb-m-24">Perhaps the next best-seller will be your book!</small>
                        <div
                            class="btn _white br60"
                            href="https://inkstone.webnovel.com/"
                            target="_blank"
                            dangerouslySetInnerHTML={{
                                __html: `
              <span class="vam mr8 dib">join us</span>
              <svg class="vam" width="20" height="20">
                <use xlink:href="#i-arrow-right"></use>
              </svg>`,
                            }}></div>
                        <img class="pa t0 r0" src="/rachayitha_spirity/1640612183_580495.png" width="48px" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;