import React from 'react'
import styled from '@emotion/styled'

import { Button, CircularProgress, Typography } from '@mui/material'

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'

const PlanCard = ({ Icon, name, description, highLight, onPayClick, isLoading, isSelected }) => {
  return (
    <Root>
      <Main>
        <InfoSection>
          <Icon color="primary" sx={{ fontSize: 120 }} />
          <InfoBottom>
            <TitleName variant="h6" component="div">
              {name}
            </TitleName>
            <Description variant="subtitle2">{description}</Description>
            <Highlight variant="h6" component="div">
              {highLight}
            </Highlight>
          </InfoBottom>
        </InfoSection>
      </Main>
      <ContinueButton
        variant="contained"
        color="primary"
        endIcon={<KeyboardBackspaceRoundedIcon sx={{ rotate: '180deg' }} />}
        startIcon={
          isLoading &&
          isSelected && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />
        }
        disabled={isLoading}
        onClick={onPayClick}>
        Pay
      </ContinueButton>
    </Root>
  )
}

export default PlanCard

const Root = styled.div`
  position: relative;

  box-shadow: 3px 3px 21px 1px rgba(98, 0, 255, 0.1);
  border-radius: 18px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;
  :hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
  min-width: 260px;
  background: #fff;
  max-width: 200px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`

const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 5px;
`

const TitleName = styled(Typography)`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Description = styled(Typography)`
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05px;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
`

const Highlight = styled(Typography)`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const ContinueButton = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  top: 0px;
  right: 0px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  .MuiSvgIcon-root {
    font-size: 1.6rem;
  }
`
