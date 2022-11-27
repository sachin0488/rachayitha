import React from 'react'
import { GenreMenuBar } from '../../Container/Explore/ExploreStyle'
import GenreMenuBarLeftSection from './Components/GenreMenuBarLeftSection'
import GenreMenuBarRightSection from './Components/GenreMenuBarRightSection'

const GenreMenuBarComp = ({ sectionName }) => {
  return (
    <>
      <GenreMenuBar>
        <GenreMenuBarLeftSection sectionName={sectionName} />
        <GenreMenuBarRightSection />
      </GenreMenuBar>
    </>
  )
}

export default GenreMenuBarComp
