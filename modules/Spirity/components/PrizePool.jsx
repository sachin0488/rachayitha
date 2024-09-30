import React from "react";
import { usePrizeListService } from "../service/PrizeList.service";

const Prizepool = ({contestDetail}) => {
    const {data:prizeList,isLoading,isError}=usePrizeListService();
    return (
        <section className="prize-section">
           {isLoading ? <p>Loading...</p> : isError ? <p>Error</p> :(
            <div className="section_wrapper section_wrapper_pb20">
                <div className="ml64 mr64 ml-m-16 mr-m-16">
                    <h2 className="dn-mobile ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu">
                        {contestDetail?.contest_name} <span className="op0.2">classNameIC Track Prizes</span>
                    </h2>
                    <h2></h2>
                    <h2 className="dn-pc ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu df-mobile">
                        <div>
                            <div>{contestDetail?.contest_name}</div>
                        </div>
                        <div className="op0.2 ml16 mobile-prizes">
                            <div className="mobile-prizes-text">classNameIC Track Prizes</div>
                            {/* <div className="mobile-prizes-and">&amp;</div>
                            <div className="mobile-prizes-text">classNameIC Track Prizes</div> */}
                        </div>
                    </h2>
                    <h2>
                        {/* <div className="dn-mobile mb36 fw400 fs16">
                            Newbie means those who get their first WebNovel contract after 2024.1.1; Newbie authors will not compete with senior
                            authors and are exclusive in Newbie Awards track only.
                        </div> */}
                        <div className="dg db-s gtc-m-1 gtc3 gap36 mb36 mb-m-24">
                            {
                                prizeList?.map((prize,index)=>{
                                    return (
                                        <div className="pt20 pb44 pt-m-16 pb-m-24 border-top-primary lh1d5">
                                <h3 className="ttc fs24 fw700 mb8 ff_ubuntu">{prize?.prize_name}</h3>
                                <div className="df mb8 mb-m-24">
                                    <p className="fs16 fs-m-14 fw400 wspw">{prize?.prize_money} INR {
                                        prize?.prize_description
                                    }</p>
                                    <img className="prize-img mb8" src={prize?.prize_logo} />
                                </div>
                            </div>
                                    )
                                })
                            }
                        </div>

                        {/* <div className="dn-mobile">
                            <h2 className="ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu">
                                WSA 2024 <span className="op0.2">classNameIC Track Prizes</span>
                            </h2>
                            <h2>
                                <div className="dg db-s gtc-m-2 gtc3 gap36 mb36 mb-m-24">
                                    <div className="pt20 pb44 pt-m-16 pb-m-24 border-top-primary lh1d5">
                                        <h3 className="ttc fs24 fw700 mb8 ff_ubuntu">Gold Prize</h3>
                                        <div className="df mb8 mb-m-24">
                                            <p className="fs16 fs-m-14 fw400 wspw">10,000 USD Media Interviews; Facebook/Youtube Promotion</p>
                                            <img className="prize-img mb8 ml8" src="/rachayitha_spirity/gold_2.png" />
                                        </div>
                                    </div>
                                    <div className="pt20 pb44 pt-m-16 pb-m-24 border-top-primary lh1d5">
                                        <h3 className="ttc fs24 fw700 mb8 ff_ubuntu">Silver Prize</h3>
                                        <div className="df mb8 mb-m-24">
                                            <p className="fs16 fs-m-14 fw400 wspw">5,000 USD Exclusive Splash Banners</p>
                                            <img className="prize-img mb8 ml8" src="/rachayitha_spirity/silver.png" />
                                        </div>
                                    </div>
                                    <div className="pt20 pb44 pt-m-16 pb-m-24 border-top-primary lh1d5">
                                        <h3 className="ttc fs24 fw700 mb8 ff_ubuntu">Bronze Prize</h3>
                                        <div className="df mb8 mb-m-24">
                                            <p className="fs16 fs-m-14 fw400 wspw">2,000 USD Adaption to Amazon KDP</p>
                                            <img className="prize-img mb8 ml8" src="/rachayitha_spirity/bronze.png" />
                                        </div>
                                    </div>
                                </div>
                            </h2>
                        </div> */}
                    </h2>
                </div>
            </div>
           )}
        </section>
    )
}

export default Prizepool;