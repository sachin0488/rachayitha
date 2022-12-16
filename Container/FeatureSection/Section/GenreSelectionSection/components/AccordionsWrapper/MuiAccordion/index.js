import * as React from 'react'
import {
  AccordionComp,
  AccordionSummaryComp,
  AccordionDetailsComp,
  GenreHeadingComp,
  HorizontalRuleComp,
} from './MuiAccordionStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { useRouter } from 'next/router'

export default function MuiAccordion({ isOpened, setOpenedIdx, idx, text, high, section, children }) {
  const router = useRouter()
  const { content_type } = router.query

  return (
    <>
      <AccordionComp expanded={isOpened}>
        <AccordionSummaryComp
          expandIcon={
            <ExpandMoreIcon
              onClick={() => {
                setOpenedIdx(isOpened ? '' : idx)
              }}
              style={{ color: '#5426C3', fontSize: '32px' }}
            />
          }
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
