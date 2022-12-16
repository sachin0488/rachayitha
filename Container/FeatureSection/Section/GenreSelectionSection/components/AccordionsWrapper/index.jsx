import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import AccordionContainer from './AccordionContainer'

const AccordionsWrapper = ({ accordionsData }) => {
  const [initialOpenedIndex, setInitialOpenedIndex] = useState(0)
  const [openedIdx, setOpenedIdx] = useState(initialOpenedIndex)
  const router = useRouter()
  const { content_type } = router.query

  useEffect(() => {
    if (content_type === 'novel') {
      setInitialOpenedIndex(0)
    } else if (content_type === 'poem') {
      setInitialOpenedIndex(1)
    } else {
      setInitialOpenedIndex(2)
    }
    console.log(initialOpenedIndex, 'index')
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
