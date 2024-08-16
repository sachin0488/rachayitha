import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import CreateReviewModal from './CreateReviewModal'
import StyledRatingField from './CreateReviewModal/components/StyledRatingField'
import { useTranslation } from 'react-i18next'

const CreateReviewSection = ({ contentId, contentType }) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Root>
      <CreateReviewModal contentId={contentId} contentType={contentType} open={open} setOpen={setOpen} />
      <InfoText variant="subtitle1">{t('reviewSection.infoText')}</InfoText>
      <Button variant="contained" onClick={() => setOpen(true)}>
        {t('reviewSection.button')}
      </Button>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 20px;
  padding: 10px;
`

const InfoText = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main};
`

export default CreateReviewSection
