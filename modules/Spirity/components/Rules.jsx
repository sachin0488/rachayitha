import React from "react";
import { useJudgementRuleListService } from "../service/JudgementRule.service";
import { useParticipationRuleService } from "../service/ParticipationRule.service";

const Rules = () => {
    // const contest_id=new URLSearchParams(window.location.search)?.get('contest_id')||1;
    // console.log(contest_id);
     const {data :JudgementRuleData,refetch,isLoading:isLoading1,isError:isError1} = useJudgementRuleListService();
     const {data: ParticipantRuleData,refetch:refetch2,isLoading:isLoading2,isError:isError2} = useParticipationRuleService();
    //  console.log(ParticipantRuleData);
    //  console.log(JudgementRuleData);
     const [showDialog, setShowDialog] = React.useState(false);
     const [showDialog2, setShowDialog2] = React.useState(false);
    const handleLearnMoreClick = () => {
        setShowDialog(!showDialog);
    };

    const handleLearnMoreClick2 = () => {
        setShowDialog2(!showDialog2);
    };
    return (
        <section>
            <div className="rules-section">
                <div className="section_wrapper">
                    <div className="ml64 mr64 ml-m-16 mr-m-16">
                        <h2 className="ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu">RULES:</h2>
                        <h2>
                            <div className="dg db-m gtc2 gap36">
                                <div>
                                    <div className="rule-wrapper fw400">
                                        <div className="pt20 pb20 pl20 pr20">
                                            <h3 className="ttc fs24 fs-m-16 fw700 mb20 ff_ubuntu">Participation Rules: </h3>
                                            <div className="border-top-primary mb20"></div>
                                            <ul className="mt8 fs16 fs-m-14">
                                                <li className="df">
                                                    All English original contracted works of year 2024 are eligible to participate. Click to view specific
                                                    requirements.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


          <div className="dialog-review">
            <button className="btn mt24 br60" onClick={handleLearnMoreClick}>
              <span className="vam mr8 dib">LEARN {!showDialog ? 'MORE' : 'LESS'}</span>
              <svg className="vam" width="20" height="20">
                <use xlinkHref="#i-arrow-right"></use>
              </svg>
            </button>

                                    

            {showDialog && (
              <div className="fs16 fs-m-14">
                <div className="fs24 fs-m-20 fw700 mb12">Participation Rules:</div>
                <ul>
                {isLoading1 ? <p>Loading...</p> : isError1 ? <p>Error</p> :(
                  ParticipantRuleData?.data?.map((rule,index) => (
                   <li className="df" key={rule.id}><span>{index+1}. {rule.participation_rule_description}</span></li>
                 ))
                )}
                </ul>
              </div>
            )}
                                    </div>
                                </div>

                                <div>
                                    <div className="rule-wrapper mt-m-24 fw400">
                                        <div className="pt20 pb20 pl20 pr20">
                                            <h3 className="ttc fs24 fs-m-16 fw700 mb20 ff_ubuntu">Judging Rules: </h3>
                                            <div className="border-top-primary mb20"></div>
                                            <ul className="mt8 fs16 fs-m-14">
                                                <li className="df">
                                                    Throughout the judging, we will ensure principles of fairness, impartiality, and democracy, demonstrating our
                                                    support for outstanding works.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="dialog-review">
            
            <button className="btn mt24 br60" onClick={handleLearnMoreClick2}>
              <span className="vam mr8 dib">LEARN {!showDialog2 ? 'MORE' : 'LESS'}</span>
              <svg className="vam" width="20" height="20">
                <use xlinkHref="#i-arrow-right"></use>
              </svg>
            </button>

                                    

            {showDialog2 && (
              <div className="fs16 fs-m-14">
                <div className="fs24 fs-m-20 fw700 mb12">Judging Rules:</div>
               <ul>
               {isLoading2 ? <p>Loading...</p> : isError2 ? <p>Error</p> :(
                  JudgementRuleData?.map((rule,index) => (
                   <li className="df" key={rule.id}><span>{index+1}. {rule.
                    judgement_rule_description}</span></li>
                 ))
                )}
               </ul>
              </div>
            )}
                                    </div>
                                </div>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rules;