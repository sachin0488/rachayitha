import React, { useState } from 'react'
import GenreButtonList from 'Components/GenreButtonList/GenreButtonList'
import MuiAccordion from 'Components/MuiAccordion/MuiAccordion'
import StyledAccordion from './StyledAccordion'

const AccordionBox = ({ text, high, explore, section }) => {
  const [openedFAQIdx, setOpenedFAQIdx] = useState(0)

  return (
    <>
      <MuiAccordion text={text} high={high} section={section}>
        <>
          <StyledAccordion
            isOpened={openedFAQIdx === FAQ.id}
            setOpenedFAQIdx={setOpenedFAQIdx}
            key={FAQ.id}
            id={FAQ.id}
            idx={FAQ.id}
            question={FAQ.question}
            answer={FAQ.answer}
          />
        </>
      </MuiAccordion>
    </>
  )
}

export default AccordionBox
