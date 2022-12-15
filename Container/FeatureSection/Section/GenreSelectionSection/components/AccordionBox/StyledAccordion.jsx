import PropTypes from 'prop-types'
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography, AccordionActions } from '@mui/material'
import styled from '@emotion/styled'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const StyledAccordion = ({ idx, question, answer, isOpened, setOpenedFAQIdx }) => {
  return (
    <Accordion
      disableGutters
      expanded={isOpened}
      sx={{
        borderRadius: '14px !important',
        boxShadow: 'none',
        overflow: 'hidden',
        border: '2.5px solid #eaeaea',
        bgcolor: '#faf9f9',
        '&.MuiPaper-root:before': {
          opacity: '0 !important',
        },
        '& .MuiButtonBase-root': {
          display: 'flex !important',
        },
      }}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            onClick={() => {
              setOpenedFAQIdx(isOpened ? '' : idx)
            }}
            sx={{ color: theme => theme.palette.primary.main }}
          />
        }>
        <StyledQuestionText>{question}</StyledQuestionText>
      </AccordionSummary>
      <AccordionDetails>
        <StyledAnswerText>{answer}</StyledAnswerText>
      </AccordionDetails>
    </Accordion>
  )
}

StyledAccordion.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  setOpenedFAQIdx: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
}

export default StyledAccordion

const StyledQuestionText = styled(Typography)`
  font-weight: 700;
  font-size: 18px;
  margin-right: auto;
`

const StyledAnswerText = styled(Typography)`
  font-weight: 600;
  font-size: 14.5px;
  line-height: 24px;
  margin-top: -10px;
  text-align: start;
`

const StyledAccordionActions = styled(AccordionActions)`
  border-top: 2.5px solid #eaeaea;
  padding: 5px 10px;
`
