import React from 'react'
import { ErrorBar, LoadingBar, NotAvailableBar } from '../cards/components'
import StyledSlider from 'components/StyledSlider'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import { useTranslation } from 'react-i18next'

const DataSection = ({ isLoading, isError, List, queryKey, contentType, CardComponent }) => {
  const { t } = useTranslation("common");
  if (isLoading) return <LoadingBar />

  if (isError) return <ErrorBar />

  if (List.length === 0) return <NotAvailableBar Icon={MenuBookRoundedIcon} text={t('noRecommendation')} />

  return <StyledSlider CardComponent={CardComponent} List={List} queryKey={queryKey} contentType={contentType} />
}

export default DataSection
