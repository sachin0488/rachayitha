import React from 'react'
import {
  AccordionComp,
  AccordionSummaryComp,
  AccordionDetailsComp,
  GenreHeadingComp,
  HorizontalRuleComp,
} from './MuiAccordionStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function MuiAccordion({ isOpened, setOpenedIdx, idx, text, high, section, children }) {
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
          aria-controls="panel1a-content">
          <GenreHeadingComp>{text}</GenreHeadingComp>
        </AccordionSummaryComp>
        <AccordionDetailsComp sx={{ height: high }}>{children}</AccordionDetailsComp>
      </AccordionComp>
      <HorizontalRuleComp></HorizontalRuleComp>
    </>
  )
}
