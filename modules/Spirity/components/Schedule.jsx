import React from "react";
import { useJudgingTimelineService } from "../service/Schedule.service";


const Schedule = ({contestDetail:submissionData,isLoading:submissionLoading}) => {
//    const {data : submissionData,isLoading:submissionLoading} = useSubmissionTimelineService();
  const {data : judgingData,isLoading:judgingLoading} = useJudgingTimelineService();

//   console.log(submissionData)
//   console.log(judgingData)

    return (
        <section className="schedule-section">
            <div className="section_wrapper">
                <div className="ml64 mr64 ml-m-16 mr-m-16">
                    <h2 className="ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu">
                        {submissionData?.contest_name} <span className="op0.2">Schedule</span>
                    </h2>
                    <h2>
                        <div className="dg db-m gtc2 gap36">
                            <div>
                                <div className="schedule-wrapper fw400">
                                    <div className="pt20 pb20 pl20 pr20">
                                        <h3 className="ttc fs24 fs-m-16 fw700 mb20 ff_ubuntu">submissions</h3>
                                        <div className="border-top-primary mb20"></div>
                                       {submissionLoading ? <p>Loading...</p> : (
                                        <ul className="fs16 fs-m-14">
                                            <li className="df">
                                                <span className="mr16">{
                                                    submissionData?.start_date
                                                }</span>
                                                <span>Begin accepting submissions</span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">{
                                                    submissionData?.end_date
                                                }</span>
                                                <span>End of submissions</span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">{
                                                    submissionData?.result_date
                                                }</span>
                                                <span>
                                                    Submissions Result
                                                </span>
                                            </li>
                                        </ul>
                                       )}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="schedule-wrapper mt-m-24 fw400">
                                    <div className="pt20 pb20 pl20 pr20">
                                        <h3 className="ttc fs24 fs-m-16 fw700 mb20 ff_ubuntu">Judging</h3>
                                        <div className="border-top-primary mb20"></div>
                                        {judgingLoading ? <p>Loading...</p> : (<ul className="fs16 fs-m-14">
                                            <li className="df">
                                                <span className="mr16">{
                                                    judgingData[0]?.judging_date
                                                }</span>
                                                <span>{
                                                    judgingData[0]?.judging_name
                                                }</span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">{
                                                    judgingData[1]?.judging_date
                                                }</span>
                                                <span>{
                                                    judgingData[1]?.judging_name
                                                }</span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">{
                                                    judgingData[2]?.judging_date
                                                }</span>
                                                <span>{
                                                    judgingData[2]?.judging_name
                                                }</span>
                                            </li>
                                        </ul>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Schedule;