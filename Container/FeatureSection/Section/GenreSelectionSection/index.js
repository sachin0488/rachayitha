import React from 'react'
import AccordionContainer from './components/AccordionContainer'
import { ExploreTextAndNestedRoute } from '../ExploreCardSection/Comp/SortBy'
import { useRouter } from 'next/router'
import { RankingTextAndNestedRoute } from 'Container/FeatureSection/Common/Config'
import { GenreAccordionContainer } from 'Container/FeatureSection/Common/Common.styles'

const GenreSelectionSection = () => {
  const router = useRouter()
  const type = router.pathname.split('/')[1]

  return (
    <>
      <GenreAccordionContainer>
        {type === 'explore'
          ? ExploreTextAndNestedRoute.map((comp, index) => (
              <AccordionContainer
                key={index}
                text={comp.text}
                explore={comp.explore}
                section={comp.section}
                high={comp.high}
              />
            ))
          : RankingTextAndNestedRoute.map((comp, index) => (
              <AccordionContainer
                key={index}
                text={comp.text}
                explore={comp.explore}
                section={comp.section}
                high={comp.high}
              />
            ))}
      </GenreAccordionContainer>
    </>
  )
}

export default GenreSelectionSection
