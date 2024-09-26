import React from "react";
import SearchModal from "../Modal/Modal";
import { useState } from "react";
import data from '../Modal/data.json'
import { useThemeListService } from "../service/ThemeList.service";
import { useBookDetailService } from "../service/BookDetail.service";


const Adventure = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [modalId, setModalId] = useState(null);

    const { data: themesData } = useThemeListService();

    console.log(themesData);
  
    // const {data :bookData1}=useBookDetailService(themesData[0].theme_booksample1
    //     );
    //     const {data :bookData2}=useBookDetailService(themesData[0].theme_booksample2
    //     );
    //     const {data :bookData3}=useBookDetailService(themesData[0].theme_booksample3
    //     );

    //     const themesDatawithbookDetails = [themesData,bookData1,bookData2,bookData3];
 
    // console.log("msns",themesDatawithbookDetails);
    
    const openModalWithId = (id) => {
        setModalId(id);
        setModalOpen(true);
    };
    return (
        <>
            <SearchModal open={isModalOpen} setOpen={setModalOpen} id={modalId} data={themesData} />
            <section className="theme-section-male c_fff">
                <div className="section_wrapper">
                    <h2 className="ml64 mr64 ml-m-16 mr-m-16 ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu dn-mobile">
                    Themes
                        {/* <span className="op0.2">Themes - Fantasy &amp; Adventure</span> */}
                    </h2>
                    <h2></h2>
                    <h2 className="ml64 mr64 ml-m-16 mr-m-16 ttu fs48 fs-m-24 mb36 mb-m-16 fw700 ff_ubuntu dn-pc theme-header-mobile">
                        <div>
                            <div>Themes</div>
                            {/* <div>2024</div> */}
                        </div>
                        {/* <div className="op0.2 ml16">
                            <div>Themes - Fantasy</div>
                            <div>&amp; Adventure</div>
                        </div> */}
                    </h2>
                    <h2>
                        <div className="dn-pc theme-switch">
                            <div className="dn-pc theme-switch-male male-theme-switch-male">
                                <img src="/rachayitha_spirity/male_male.png" />
                            </div>
                            <div className="dn-pc theme-switch-female male-theme-switch-female">
                                <img src="/rachayitha_spirity/male_female.png" />
                            </div>
                        </div>
                        <div className="theme-scroll">
                            <div className="theme-scroll-wrapper dg gtc-s-1 gtc2 gap36 gap-m-16 ml64 mr64  ml-m-16 mr-m-16">
                            {
                                themesData?.map((item,index)=>{
                                  return (  <div onClick={() => openModalWithId(item?.id)} className="theme-pic df jcfe fdc pr dialog-review">
                                    <div style={{ backgroundImage: `url(${item?.theme_backgoundimg})` }} className="theme-bkg"></div>
                                    <div className="pr z1">
                                        <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">{item?.theme_name}</h3>
                                        <p className="fs16 fs-m-14 lh1d5 fw400">
                                            {item?.theme_keywords}
                                        </p>
                                    </div>
                                    <div className="dn">
                                        <h3 className="mb4 ttc fs24 lh1d3 fw700">{item?.theme_name}</h3>
                                        <p className="fs16 lh1d5 mb24">
                                           {item?.theme_keywords}
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                           {item?.theme_description}
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Ideas</h3>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>1. </strong>{item?.theme_example1}
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>2. </strong>{item?.theme_example2}
                                        </p>
                                        <p className="fs16 lh1d5 mb24 wspw">
                                            <strong>3. </strong>{item?.theme_example3}
                                        </p>
                                        <div className="border-top-primary mb24"></div>
                                        <h3 className="fs24 fw700 lh1d3 mb24">Examples</h3>
                                        <div className="dg gtc3 gap24 gap-m-16">
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/scholar's-advanced-technological-system_12583970906002305"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/12583970906002305/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Scholar&apos;s Advanced Technological System</h4>
                                            </div>
                                            <div className="book-link" href="https://www.webnovel.com/book/my-vampire-system_16709365405930105" target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/16709365405930105/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">My Vampire System</h4>
                                            </div>
                                            <div
                                                className="book-link"
                                                href="https://www.webnovel.com/book/reincarnated-with-the-strongest-system_19720038005035905"
                                                target="_blank">
                                                <div className="bookCover mb16 mb-m-8">
                                                    <img src="https://img.webnovel.com/bookcover/19720038005035905/150/150.jpg" />
                                                </div>
                                                <h4 className="fs16 fs-m-14 lh1d5 fw400">Reincarnated With The Strongest System</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                })
                            }
                            </div>
                        </div>
                    </h2>
                </div>
            </section>
        </>
    )
}

export default Adventure;