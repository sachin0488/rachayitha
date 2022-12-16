import React from 'react'
import { ExploreTextAndNestedRoute } from '../ExploreCardSection/Comp/SortBy'
import { useRouter } from 'next/router'
import { RankingTextAndNestedRoute } from 'Container/FeatureSection/Common/Config'
import { GenreAccordionContainer } from 'Container/FeatureSection/Common/Common.styles'
import AccordionsWrapper from './components/AccordionsWrapper'

const GenreSelectionSection = () => {
  const router = useRouter()
  const type = router.pathname.split('/')[1]

  return (
    <>
      <GenreAccordionContainer>
        {type === 'explore' ? (
          <AccordionsWrapper accordionsData={ExploreTextAndNestedRoute} />
        ) : (
          <AccordionsWrapper accordionsData={RankingTextAndNestedRoute} />
        )}
      </GenreAccordionContainer>
    </>
  )
}

export default GenreSelectionSection
