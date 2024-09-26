import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import { useParticipationRuleService } from 'modules/Leaderboard/services/ParticipationRule.service'
import { useTermConditionService } from 'modules/Leaderboard/services/TermCondition.service'

function RulesAndGuidelines({ contestID }) {
  const { data } = useParticipationRuleService(contestID)
  const { data: termData, refetch: refetchTerms } = useTermConditionService(contestID)
  const [open, setOpen] = useState(false)
 console.log(termData.data.length)
  const handleOpen = () => {
    refetchTerms()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const KeyPoints = data?.data?.map(item => item?.participation_rule_description)

  return (
    <Root>
      <Wrapper>
        <Heading>Rules and Guidelines</Heading>
        <Container>
          <LeftSection>
            <img src="./rules&guidelines.png" alt="Rules and Guidelines" />
          </LeftSection>
          <RightSection>
            <Subheading>Key Points</Subheading>
            <Points>
              {KeyPoints.map((point, index) => (
                <Point key={index}>
                  <Icon>
                    <CheckCircleOutlineOutlinedIcon
                      sx={{
                        fontSize: '2rem',
                        width: '2rem',
                        height: '2rem',
                        '@media (max-width: 600px)': {
                          fontSize: '1.5rem',
                          width: '1.5rem',
                          height: '1.5rem',
                        },
                      }}
                    />
                  </Icon>
                  {point}
                </Point>
              ))}
            </Points>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleOpen} // Opens the modal on click
              sx={{
                mt: '25px',
                alignSelf: 'flex-start',
                padding: '6.5px 57px',
                fontWeight: '600',
                fontSize: '1.05rem',
                backgroundColor: '#fff',
                '@media (max-width: 600px)': {
                  padding: '10px 20px',
                  alignSelf: 'center',
                },
              }}>
              Read Terms & Guidelines
            </Button>
          </RightSection>
        </Container>
      </Wrapper>

      {/* Terms and Conditions Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogContent>
          {termData?.data?.length > 0 ? (
            termData?.data?.map((term, index) => (
              <div key={index}>
                <h3>{term?.term_name}</h3>
                <p>{term?.term_description}</p>
              </div>
            ))
          ) : (
            <p>No terms available</p>
          )}
        </DialogContent>
        <Button onClick={handleClose} sx={{ margin: '20px' }}>
          Close
        </Button>
      </Dialog>
    </Root>
  )
}

// Styled components (same as your original styles)
const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 80px;
`

const Wrapper = styled.div`
  padding: 20px;
`

const Heading = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  color: #000;
  font-weight: 600;
  font-family: 'Maven Pro';
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

const LeftSection = styled.div`
  flex: 1;
  max-width: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const RightSection = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const Subheading = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const Points = styled.div`
  font-size: 1.3rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`

const Point = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #5624c1;

  @media (max-width: 768px) {
    margin-right: 5px;
  }
`

export default RulesAndGuidelines
