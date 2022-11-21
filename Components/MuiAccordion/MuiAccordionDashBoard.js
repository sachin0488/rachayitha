import * as React from 'react'
import {
  AccordionDashBoardComp,
  AccordionSummaryDashBoardComp,
  AccordionDetailsDashBoardComp,
  GenreHeadingDashBoardComp,
  HorizontalRuleDashBoardComp,
} from './MuiAccordionStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function MuiAccordionDashBoard({ textSize, text, high, children }) {
  return (
    <>
      <AccordionDashBoardComp>
        <AccordionSummaryDashBoardComp
          expandIcon={<ExpandMoreIcon style={{ color: '#5426C3', fontSize: { textSize } }} />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <GenreHeadingDashBoardComp textSize={textSize}>{text}</GenreHeadingDashBoardComp>
        </AccordionSummaryDashBoardComp>
        <AccordionDetailsDashBoardComp sx={{ height: high }}>{children}</AccordionDetailsDashBoardComp>
      </AccordionDashBoardComp>
      <HorizontalRuleDashBoardComp></HorizontalRuleDashBoardComp>
    </>
  )
}
