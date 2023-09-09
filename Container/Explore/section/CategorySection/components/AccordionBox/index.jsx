import React from 'react'
import styled from '@emotion/styled'
import {
  Accordion,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionSummary,
  accordionSummaryClasses,
  CircularProgress,
  Skeleton,
  Typography,
} from '@mui/material'
import StyledButton from './StyledButton'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

const AccordionBox = ({ isOpened, setOpenedIdx, item, idx, isLoading }) => {
  return (
    <Root expanded={isOpened}>
      <Summary
        onClick={() => {
          setOpenedIdx(isOpened ? '' : idx)
        }}
        expandIcon={<ExpandMoreRoundedIcon sx={{ color: ({ palette }) => palette.primary.main, fontSize: '32px' }} />}>
        <Heading>{item.name}</Heading>
      </Summary>
      <Details>
        {isLoading ? (
          <>
            <Skeleton variant="rounded" width={91} height={36.25} />
            <Skeleton variant="rounded" width={91} height={36.25} />
            <Skeleton variant="rounded" width={91} height={36.25} />
            <Skeleton variant="rounded" width={91} height={36.25} />
            <Skeleton variant="rounded" width={91} height={36.25} />
            <Skeleton variant="rounded" width={91} height={36.25} />
          </>
        ) : (
          item?.CategoryList?.map((category, idx) => (
            <StyledButton key={idx} category={category} contentType={item.contentType.toLowerCase()} />
          ))
        )}
      </Details>
    </Root>
  )
}

const Root = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  margin-bottom: -5px;
  padding: 0px;
  background-color: ${({ theme }) => theme.palette.background.default};
  background-image: none;
  && {
    &::before {
      height: 3px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.palette.primary.main}19;
      opacity: 1;
    }
  }
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.1px;
`

const Summary = styled(AccordionSummary)`
  &.${accordionSummaryClasses.root} {
    padding-left: 0px;
    padding: 0px;
  }
`

const Details = styled(AccordionDetails)`
  &.${accordionDetailsClasses.root} {
    margin-top: -5px;
    margin-bottom: -15px;
    padding-left: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 15px;
    min-width: 213px;
  }
`

export default AccordionBox
