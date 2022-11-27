import { useRouter } from 'next/router'
import React from 'react'
import { LeftSideGenreMenuBar } from '../../../Container/Explore/ExploreStyle'
import LinkContainer from '../../../Container/Explore/LinkContainer'
import RankingLinksContainer from '../../../Container/Ranking/RankingLinksContainer'

const GenreMenuBarLeftSection = ({ sectionName }) => {
  const router = useRouter()
  const section = router.pathname.split('/')[1]
  //   console.log(section, 'section')
  return (
    <>
      <LeftSideGenreMenuBar>
        {sectionName.map(list =>
          section === `explore` ? (
            <LinkContainer href={list.href} img_url={list.img_url} genretitle={list.genretitle} />
          ) : (
            <RankingLinksContainer href={list.href} img_url={list.img_url} genretitle={list.genretitle} />
          ),
        )}
      </LeftSideGenreMenuBar>
    </>
  )
}

export default GenreMenuBarLeftSection
