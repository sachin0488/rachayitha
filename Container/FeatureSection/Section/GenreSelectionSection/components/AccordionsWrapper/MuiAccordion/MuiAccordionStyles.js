import Accordion from '@mui/material/Accordion'
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary'
import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'
import { laptop, laptopS } from '../../../../../../../styles/mediaQuery/breakPoints'

export const AccordionComp = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  margin-bottom: -5px;
`

export const AccordionDashBoardComp = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  margin-bottom: -5px;
`

export const AccordionSummaryComp = styled(AccordionSummary)`
  &.${accordionSummaryClasses.root} {
    width: 180px;
    padding-left: 0px;
  }
  @media ${laptop} {
    min-width: 250px;
    padding-top: 0px;
  }
  @media ${laptopS} {
    min-width: 270px;
    padding-top: 0px;
  }
`

export const AccordionSummaryDashBoardComp = styled(AccordionSummary)`
  &.${accordionSummaryClasses.root} {
    width: 190px;
  }
  @media ${laptop} {
    min-width: 190px;
    padding-top: 15px;
  }
  @media ${laptopS} {
    min-width: 200px;
    padding-top: 15px;
  }
`

export const AccordionDetailsComp = styled(AccordionDetails)`
  &.${accordionDetailsClasses.root} {
    margin-top: -10px;
    padding-left: 0px;
  }
`

export const AccordionDetailsDashBoardComp = styled(AccordionDetails)`
  &.${accordionDetailsClasses.root} {
    margin-top: -10px;
    width: 100%;
    height: 100%;
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
export const GenreHeadingDashBoardComp = styled(Typography)`
  font-weight: 400px;
  font-size: ${({ textSize }) => textSize};
`
export const HorizontalRuleComp = styled.div`
  border-top: 1px solid #e7e7e7;
`

export const HorizontalRuleDashBoardComp = styled.div`
  border-top: 1px solid #e7e7e7;
`
