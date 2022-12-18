import { useRouter } from 'next/router'
import React, { useLayoutEffect, useState } from 'react'
import AccordionContainer from './AccordionContainer'

const getSectionIndexByName = sectionName => {
  switch (sectionName.toLocaleLowerCase()) {
    case 'novel':
      return 0
    case 'poem':
      return 1
    case 'short':
      return 2
    default:
      return ''
  }
}

const AccordionsWrapper = ({ accordionsData }) => {
  const { query } = useRouter()
  const { content_type } = query

  const [openedIdx, setOpenedIdx] = useState('')

  useLayoutEffect(() => {
    setOpenedIdx(getSectionIndexByName(String(content_type)))
  }, [content_type])

  return (
    <>
      {accordionsData.map((comp, index) => (
        <AccordionContainer
          idx={index}
          openedIdx={openedIdx}
          setOpenedIdx={setOpenedIdx}
          key={index}
          text={comp.text}
          explore={comp.explore}
          section={comp.section}
          high={comp.high}
          id={comp.id}
        />
      ))}
    </>
  )
}

export default AccordionsWrapper
