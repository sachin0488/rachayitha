import React from 'react'
import { ExploreTextAndNestedRoute } from '../ExploreCardSection/Comp/SortBy'
import { useRouter } from 'next/router'
import { RankingTextAndNestedRoute } from 'container/FeatureSection/common/Config'
import { GenreAccordionContainer } from 'container/FeatureSection/common/common.styles'
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
