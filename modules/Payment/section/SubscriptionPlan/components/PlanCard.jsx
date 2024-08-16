import React from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import { Button, CircularProgress, Typography } from '@mui/material'

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'

const PlanCard = ({ Icon, name, description, shortDescription, validity, amount, onPayClick, isLoading, isSelected }) => {
  const { t } = useTranslation();
  return (
    <Root>
      <Validity>
        <Typography variant="subtitle2" color="white">
          {validity} {validity === 1 ? 'day' : 'days'}
        </Typography>
      </Validity>
      <Main>
        <InfoSection>
          <Icon color="primary" sx={{ fontSize: 120 }} />
          <InfoBottom>
            <TitleName variant="h6" component="div">
              {name}
            </TitleName>
            <Description variant="subtitle1" fontWeight={500}>
              {shortDescription}
            </Description>
            <Description variant="subtitle2" fontWeight={400} fontSize={13}>
              {description}
            </Description>
          </InfoBottom>
        </InfoSection>
      </Main>
      <Design />
      <Design className="second" />
      <Design className="third" />
      <ContinueButton
        variant="contained"
        color="primary"
        endIcon={<KeyboardBackspaceRoundedIcon sx={{ rotate: '180deg' }} />}
        startIcon={isLoading && isSelected && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
        disabled={isLoading}
        onClick={onPayClick}>
        {t('Pay')}
        <Typography
          sx={{
            backgroundColor: '#ffffff30',
            padding: '0px 5px',
            borderRadius: '5px',
          }}
          variant="subtitle2"
          fontSize={13.2}
          fontWeight={500}
          marginLeft={1}>
          {amount} Coins
        </Typography>
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
  /* min-width: 250px; */
  background: ${({ theme }) => theme.palette.background.paper};
  max-width: 180px;
  min-width: 220px;
  overflow: clip;
`
const Validity = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 5px 10px;
  border-radius: 18px;
  position: absolute;
  top: 2.5px;
  right: 2.5px;
`

const Design = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main}17;
  position: absolute;
  bottom: -30px;
  right: -40px;
  &.second {
    width: 80px;
    height: 80px;
    top: -30px;
    right: -10px;
  }
  &.third {
    width: 60px;
    height: 60px;
    top: 45px;
    right: 35px;
  }
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  width: 100%;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  padding-top: 10px;
  width: 100%;
`

const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  gap: 2px;
`

const TitleName = styled(Typography)`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Description = styled(Typography)`
  /* font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05px; */
  color: ${({ theme }) => theme.palette.secondary.main}aa;
`

const Highlight = styled(Typography)`
  font-weight: 600;
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
  span {
    margin-left: 10px;
  }
`
