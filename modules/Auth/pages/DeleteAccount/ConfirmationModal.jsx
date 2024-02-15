import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { StyledModal } from 'components/StyledModal'
import useInterval from 'hooks/useInterval'
import { useDeleteAccountService } from 'modules/Auth/service/DeleteAccount.service'
import React, { useCallback, useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'

const ConfirmationModal = ({ open, setOpen }) => {
  const { handleDelete, isLoading } = useDeleteAccountService()
  const [counter, setCounter] = useState(20)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    if (counter <= 0) {
      setDelay(null)
      return
    }
    setCounter(counter - 1)
  }, delay)

  useEffect(() => {
    if (open) {
      setCounter(20)
      setDelay(1000)
    }
  }, [open])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={400}>
      <Main>
        <ConfirmationCounter variant="h1" fontWeight={500} color="primary">
          {counter}
        </ConfirmationCounter>
        <Typography variant="subtitle1" fontWeight={500} color="secondary" paddingInline={2} paddingTop={2} paddingBottom={1}>
          Following are the things that will happen:
        </Typography>

        <ul>
          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
            All your data will be deleted from our servers. This includes your profile, posts, comments, and any other data you have
            provided us.
          </Typography>
          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
            You will be logged out from all your devices.
          </Typography>
          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
            You will not be able to recover your account.
          </Typography>

          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
            You will not be able to access your subscription.
          </Typography>

          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
            You will not be able to access your coins.
          </Typography>

          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
            Your Published Poems and Novels or any other content will be deleted.
          </Typography>
        </ul>
      </Main>
      <Footer>
        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            setOpen(false)
          }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          disableElevation
          disabled={counter != 0 || isLoading}
          onClick={handleDelete}
          endIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : <DeleteForeverRoundedIcon />}>
          Confirm Account Deletion!
        </Button>
      </Footer>
    </Root>
  )
}

const Root = styled(StyledModal)`
  padding: 1rem;
`

const Main = styled.div``

const ConfirmationCounter = styled(Typography)``

const Footer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`

export default ConfirmationModal
