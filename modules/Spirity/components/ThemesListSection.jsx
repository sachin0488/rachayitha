import React, { useCallback, useMemo, useState } from 'react'
import { useThemeListService } from '../service/ThemeList.service'

import ThemeDetailsModal from './ThemeDetailsModal'

const ThemesListSection = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalId, setModalId] = useState(null)

  const { data: themesData } = useThemeListService()

  console.log(themesData)

  const handleOpenModalWithId = useCallback(
    id => {
      setModalId(id)
      setModalOpen(true)
    },
    [setModalId, setModalOpen],
  )

  const currentTheme = useMemo(() => {
    return themesData.find(theme => theme.id === modalId)
  }, [themesData, modalId])

  return (
    <>
      <ThemeDetailsModal open={isModalOpen} setOpen={setModalOpen} id={modalId} data={currentTheme} />
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
            </div>
            */}
          </h2>
          <h2>
            <div className="theme-scroll">
              <div className="theme-scroll-wrapper dg gtc-s-1 gtc2 gap36 gap-m-16 ml64 mr64 ml-m-16 mr-m-16">
                {themesData?.map((item, index) => {
                  return (
                    <div key={item?.id} onClick={() => handleOpenModalWithId(item?.id)} className="theme-pic df jcfe fdc pr dialog-review">
                      <div style={{ backgroundImage: `url(${item?.theme_backgoundimg})` }} className="theme-bkg"></div>
                      <div className="pr z1">
                        <h3 className="mb4 ttc fs24 fs-m-16 fw700 lh1d5 ff_ubuntu">{item?.theme_name}</h3>
                        <p className="fs16 fs-m-14 lh1d5 fw400">{item?.theme_keywords}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </h2>
        </div>
      </section>
    </>
  )
}

export default ThemesListSection
