import React from "react";


const Schedule = () => {
    return (
        <section className="schedule-section">
            <div className="section_wrapper">
                <div className="ml64 mr64 ml-m-16 mr-m-16">
                    <h2 className="ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu">
                        WSA 2024 <span className="op0.2">Schedule</span>
                    </h2>
                    <h2>
                        <div className="dg db-m gtc2 gap36">
                            <div>
                                <div className="schedule-wrapper fw400">
                                    <div className="pt20 pb20 pl20 pr20">
                                        <h3 className="ttc fs24 fs-m-16 fw700 mb20 ff_ubuntu">submissions</h3>
                                        <div className="border-top-primary mb20"></div>
                                        <ul className="fs16 fs-m-14">
                                            <li className="df">
                                                <span className="mr16">2024.01.01</span>
                                                <span>Begin accepting submissions</span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">2024.08.15</span>
                                                <span>Begin establishing a review committee</span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">2024.09.15</span>
                                                <span>End of submissions</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="schedule-wrapper mt-m-24 fw400">
                                    <div className="pt20 pb20 pl20 pr20">
                                        <h3 className="ttc fs24 fs-m-16 fw700 mb20 ff_ubuntu">Judging</h3>
                                        <div className="border-top-primary mb20"></div>
                                        <ul className="fs16 fs-m-14">
                                            <li className="df">
                                                <span className="mr16">2024.09.16</span>
                                                <span>Judging by review committee </span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">2024.09.25</span>
                                                <span>Judging by content editors </span>
                                            </li>
                                            <li className="df">
                                                <span className="mr16">2024.10.05</span>
                                                <span>End of Judging</span>
                                            </li>
                                        </ul>
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