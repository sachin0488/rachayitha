import React from 'react'
import { ErrorBar, LoadingBar, NotAvailableBar } from '../cards/components'
import StyledSlider from 'Components/StyledSlider'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'

const DataSection = ({ isLoading, isError, List, queryKey, contentType, CardComponent }) => {
  if (isLoading) return <LoadingBar />

  if (isError) return <ErrorBar />

  if (List.length === 0) return <NotAvailableBar Icon={MenuBookRoundedIcon} text="Currently we don't have this!" />

  return <StyledSlider CardComponent={CardComponent} List={List} queryKey={queryKey} contentType={contentType} />
}

export default DataSection
