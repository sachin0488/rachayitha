import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary'
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
import { laptop, laptopS } from '../../../../../../../../../styles/mediaQuery/breakPoints'
import { LikedText, ReplyIcon } from '../../LikedComp'

export default function ReplyAccordion({ children }) {
  return (
    <AccordionComp>
      <AccordionSummaryComp expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <LikedText startIcon={<ReplyIcon />}>23 Replies</LikedText>
      </AccordionSummaryComp>
      <AccordionDetailsComp>{children}</AccordionDetailsComp>
    </AccordionComp>
  )
}

export const AccordionComp = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  margin-bottom: -5px;
`

export const AccordionSummaryComp = styled(AccordionSummary)`
  &.${accordionSummaryClasses.root} {
    width: 160px;
    padding-left: 0px;
    margin-right: 0px;
  }
`

export const AccordionDetailsComp = styled(AccordionDetails)`
  &.${accordionDetailsClasses.root} {
    margin-top: -10px;
    padding-left: 0px;
    width: 100%;
  }
`

export const GenreHeadingComp = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  @media ${laptop} {
    font-size: 22px;
  }
  @media ${laptopS} {
    font-size: 24px;
  }
  line-height: 23px;
  letter-spacing: 0.1px;
  display: flex;
  justify-content: center;
`
