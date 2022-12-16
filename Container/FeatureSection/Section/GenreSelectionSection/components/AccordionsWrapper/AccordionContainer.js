import React, { useState } from 'react'
import GenreButtonList from '../../GenreButtonList/GenreButtonList'
import MuiAccordion from './MuiAccordion'

const AccordionContainer = ({ openedIdx, setOpenedIdx, idx, text, high, explore, section }) => {
  const [genreLead, setGenreLead] = useState('male')
  return (
    <>
      <MuiAccordion
        isOpened={openedIdx === idx}
        idx={idx}
        setOpenedIdx={setOpenedIdx}
        text={text}
        high={high}
        section={section}>
        <>
          <GenreButtonList explore={explore} section={section} genreLead={genreLead} />
        </>
      </MuiAccordion>
    </>
  )
}

export default AccordionContainer
