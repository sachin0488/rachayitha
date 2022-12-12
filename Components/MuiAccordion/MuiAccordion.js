import * as React from 'react'
import {
  AccordionComp,
  AccordionSummaryComp,
  AccordionDetailsComp,
  GenreHeadingComp,
  HorizontalRuleComp,
} from './MuiAccordionStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function MuiAccordion({ text, high, section, children }) {
  // const [expanded, setExpanded] = React.useState(false)

  // const handleChange = panel => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false)
  // }
  const router = useRouter()
  const { content_type } = router.query
  console.log(content_type, 'content')
  return (
    <>
      <AccordionComp>
        <AccordionSummaryComp
          expandIcon={<ExpandMoreIcon style={{ color: '#5426C3', fontSize: '32px' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <GenreHeadingComp>{text}</GenreHeadingComp>
        </AccordionSummaryComp>
        <AccordionDetailsComp sx={{ height: high }}>{children}</AccordionDetailsComp>
      </AccordionComp>
      <HorizontalRuleComp></HorizontalRuleComp>
    </>
  )
}
