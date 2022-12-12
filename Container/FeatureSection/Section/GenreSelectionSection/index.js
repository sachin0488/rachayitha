import React from 'react'
import AccordionContainer from './Comp/AccordionContainer'
import { ExploreTextAndNestedRoute } from '../ExploreCardSection/Comp/SortBy'
import { useRouter } from 'next/router'
import { RankingTextAndNestedRoute } from 'Container/FeatureSection/Common/Config'
import { GenreAccordionContainer } from 'Container/FeatureSection/Common/Common.styles'

const index = () => {
  const router = useRouter()
  const type = router.pathname.split('/')[1]

  console.log(type, 'type')
  return (
    <>
      <GenreAccordionContainer>
        {type === 'explore'
          ? ExploreTextAndNestedRoute.map(comp => (
              <AccordionContainer text={comp.text} explore={comp.explore} section={comp.section} high={comp.high} />
            ))
          : RankingTextAndNestedRoute.map(comp => (
              <AccordionContainer text={comp.text} explore={comp.explore} section={comp.section} high={comp.high} />
            ))}
      </GenreAccordionContainer>
    </>
  )
}

export default index
