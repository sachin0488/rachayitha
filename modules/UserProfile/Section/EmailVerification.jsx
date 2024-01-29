import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import { useUserService } from 'modules/Auth/service/User.service'
import { useState } from 'react'

const EmailVerification = () => {
  const { user, refetch } = useUserService()
  const [isCheckStatusButtonDisabled, setIsCheckStatusButtonDisabled] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)

  return (
    <Root className={'email-verification'}>
      <Box
        sx={{
          margin: '0px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          maxWidth: 600,
        }}>
        <LogoImage src="/rachayitha_logo_500.svg" />
        <Box
          sx={{
            background: theme => theme.palette.primary.main + '08',
            borderRadius: '12px',
            padding: '10px 16px',
          }}>
          <Typography variant="h6" color="secondary">
            Verify your email to unlock the full experience.
          </Typography>
          <Description variant="subtitle2" fontWeight={400} marginTop={1} color="secondary">
            Welcome aboard, <span>{user.fullName}</span>! Your rachayitha journey starts with verifying your email. Just click the link in
            the email we sent to <span>{user.email}</span> and {`you'll`} be all set! Thanks for joining us!
          </Description>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
          }}>
          {isCheckStatusButtonDisabled && (
            <Typography variant="subtitle2" color="secondary.light" marginLeft={1}>
              You can recheck the verification status within {secondsLeft} second.
            </Typography>
          )}
          <Button
            disabled={isCheckStatusButtonDisabled}
            variant="contained"
            disableElevation
            sx={{ marginLeft: 'auto' }}
            onClick={() => {
              setIsCheckStatusButtonDisabled(true)
              setSecondsLeft(10)
              const intr = setInterval(() => {
                setSecondsLeft(pre => pre - 1)
              }, 1000)
              setTimeout(() => {
                setIsCheckStatusButtonDisabled(false)
                clearInterval(intr)
              }, 10000)
              refetch()
            }}>
            Check verification status
          </Button>
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex: 1;
  display: none;
  &.display {
    opacity: 1;
    display: flex;
  }
  &.email-verification {
    opacity: 1;
    display: flex;
  }
`

const LogoImage = styled.img`
  height: auto;
  width: 250px;
  max-width: 70%;
  margin-bottom: -4px;
  margin-left: 14px;
  user-select: none;
`

const Description = styled(Typography)`
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
  }
`

export default EmailVerification
