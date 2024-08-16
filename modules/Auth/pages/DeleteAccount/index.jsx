import styled from '@emotion/styled'
import { Button, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import ConfirmationModal from './ConfirmationModal'
import { useRouter } from 'next/router'
import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer'

export const mainMaxWidth = 1720

const DeleteAccountPage = () => {
  const { t } = useTranslation("common");
  const { back } = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <Root>
      <ConfirmationModal open={open} setOpen={setOpen} />
      <Main>
        <Header>
          <IconButton color="primary" size="large" onClick={back}>
            <KeyboardBackspaceRoundedIcon
              style={{
                fontSize: 30,
              }}
            />
          </IconButton>
          <Typography variant="h5" color="secondary" fontWeight={500} marginLeft={2}>
            {t('deleteAccount.index.deleteYourAccount')}
          </Typography>
          <SelectLanguageContainer />
        </Header>
        <StyledPaper>
          <Typography variant="h6" color="secondary" fontWeight={500} padding={2}>
            {t('deleteAccount.index.areYouSureYouWantToDelete')}
          </Typography>
          <Typography variant="body2" color="secondary" paddingInline={2}>
            {t('deleteAccount.index.onceYouDeleteYourAccountThereIsNoGoingBack')}
          </Typography>

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
          <Typography variant="body1" color="secondary" padding={2}>
            {t('deleteAccount.index.ifYouAreSurePleaseClickTheButtonBelow')}
          </Typography>

          <Button
            sx={{
              mt: 2,
            }}
            endIcon={<DeleteForeverRoundedIcon />}
            disableElevation
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            onClick={() => {
              setOpen(true)
            }}>
            {t('deleteAccount.index.deleteAccount')}
          </Button>
        </StyledPaper>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  margin-top: ${({ theme }) => theme.mixins.toolbar.minHeight}px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  color: black;
  background: linear-gradient(180deg, rgba(102, 59, 203, 0.15) 0%, rgba(102, 59, 203, 0) 100%);
  --main-side-spacing: 50px;
  @media (max-width: 1000px) {
    --main-side-spacing: 30px;
  }
  @media (max-width: 435px) {
    --main-side-spacing: 15px;
  }
  @media (max-width: 405px) {
    --main-side-spacing: 15px;
  }
  isolation: isolate;
  overflow: clip;
`

const Main = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-inline: auto;
  max-width: ${mainMaxWidth}px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: fit-content;
  padding: 10px 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  margin: 20px 20px;
  max-width: 650px;
`

export default DeleteAccountPage
