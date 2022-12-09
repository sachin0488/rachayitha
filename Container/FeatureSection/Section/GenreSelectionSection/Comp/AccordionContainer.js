import React, { useState } from 'react'
import GenreButtonList from 'Components/GenreButtonList/GenreButtonList'
import MuiAccordion from 'Components/MuiAccordion/MuiAccordion'

const AccordionContainer = ({ text, high, explore, section }) => {
  const [genreLead, setGenreLead] = useState('male')
  return (
    <>
      <MuiAccordion text={text} high={high}>
        <>
          <GenreButtonList explore={explore} section={section} genreLead={genreLead} />
        </>
      </MuiAccordion>
    </>
  )
}

export default AccordionContainer
