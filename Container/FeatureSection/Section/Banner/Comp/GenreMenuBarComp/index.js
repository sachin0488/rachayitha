import { useRouter } from 'next/router'
import React from 'react'
import { GenreMenuBar } from 'container/FeatureSection/common/common.styles'
import ExploreGenreMenuBarLeftSection from './Components/ExploreGenreMenuBarLeftSection'
import RankingGenreMenuBarLeftSection from './Components/RankingGenreMenuBarLeftSection'

const GenreMenuBarComp = () => {
  const router = useRouter()
  const section = router.pathname.split('/')[1]
  return (
    <>
      <GenreMenuBar>
        {section == 'explore' ? <ExploreGenreMenuBarLeftSection /> : <RankingGenreMenuBarLeftSection />}
      </GenreMenuBar>
    </>
  )
}

export default GenreMenuBarComp
