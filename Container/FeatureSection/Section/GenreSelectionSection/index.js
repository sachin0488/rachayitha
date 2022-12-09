import { GenreAccordionContainer } from 'Container/Explore/ExploreStyle'
import React from 'react'
import AccordionContainer from './Comp/AccordionContainer'
import { ExploreTextAndNestedRoute } from '../ExploreCardSection/Comp/SortBy'

const index = () => {
  //   const router = useRouter()
  //   const type = router.pathname.split('/')[1]
  return (
    <>
      <GenreAccordionContainer>
        {ExploreTextAndNestedRoute.map(comp => (
          <AccordionContainer text={comp.text} explore={comp.explore} section={comp.section} high={comp.high} />
        ))}
      </GenreAccordionContainer>
    </>
  )
}

export default index
