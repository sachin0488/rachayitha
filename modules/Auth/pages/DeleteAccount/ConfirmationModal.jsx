import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { StyledModal } from 'components/StyledModal'
import useInterval from 'hooks/useInterval'
import { useDeleteAccountService } from 'modules/Auth/service/DeleteAccount.service'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

import CircularProgress from '@mui/material/CircularProgress'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'

const ConfirmationModal = ({ open, setOpen }) => {
  const {t} = useTranslation("common");
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
          {t('deleteAccount.followingAreTheThingsThatWillHappen')}
        </Typography>

        <ul>
          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
            {t('deleteAccount.point1')}
          </Typography>
          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
          {t('deleteAccount.point2')}
          </Typography>
          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
          {t('deleteAccount.point3')}
          </Typography>

          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
          {t('deleteAccount.point4')}
          </Typography>

          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
          {t('deleteAccount.point5')}
          </Typography>

          <Typography as="li" variant="subtitle2" color="secondary" paddingInline={2} paddingBlock={0.4}>
          {t('deleteAccount.point6')}
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
          {t('deleteAccount.confirmAccountDelete')}
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
