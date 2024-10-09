import styled from '@emotion/styled'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { StyledModal } from 'components/StyledModal'
import React from 'react'
import StyledTextField from '../FormComponents/StyledTextField'
import { FormProvider, useForm } from 'react-hook-form'
import { useRedeemReferralCodeService } from 'modules/Auth/service/RedeemReferralCode.service'

const ReferralCodePopup = ({ open, onClose, onBlur }) => {
  const { isLoading, mutate } = useRedeemReferralCodeService()
  const methods = useForm({
    defaultValues: {
      referralCode: '',
    },
  })

  return (
    <Root maxWidth="39rem" maxHeight="fit-content" open={open} breakPoint={400} handleClose={onBlur}>
      <Main>
        <Box
          sx={{
            margin: '0px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: 600,
            '@media (max-width: 400px)': {
              margin: 'auto 10px',
            },
          }}>
          {/* <LogoImage src="/rachayitha_logo_500.svg" /> */}
          <FormProvider {...methods}>
            <Typography variant="h5" fontWeight={500} color="secondary">
              Referral Code
            </Typography>
            <Description variant="subtitle2" fontWeight={500} color="secondary">
              Redeem your referral to avail exciting offers !
            </Description>

            <StyledTextField name="referralCode" placeholder="Enter your referral code..." />
          </FormProvider>
          <Bottom>
            <Button variant="text" disableElevation onClick={onClose}>
              Do not show this again!
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={methods.handleSubmit(mutate)}
              disabled={isLoading}
              endIcon={isLoading && <CircularProgress size={20} color="inherit" />}>
              Submit
            </Button>
          </Bottom>
        </Box>
      </Main>
    </Root>
  )
}

const Root = styled(StyledModal)`
  padding: 20px 6px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 400px) {
    padding: 20px 6px;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  flex: 1;
  opacity: 1;
  display: flex;
  @media (max-width: 400px) {
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
  }
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`

const LogoImage = styled.img`
  height: auto;
  width: 250px;
  max-width: 70%;
  margin-bottom: 4px;
  margin-left: 14px;
  user-select: none;
`

const Description = styled(Typography)`
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
  }
`

export default ReferralCodePopup
