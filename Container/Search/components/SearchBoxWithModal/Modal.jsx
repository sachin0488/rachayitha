import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import StyledDateSelector from 'Components/form-components/StyledDateSelector'
import StyledTextField from 'Components/form-components/StyledTextField'
import { StyledModal } from 'Components/StyledModal'
import React, { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import ContentSection from './components/ContentList'
import StyledSearchBox from './components/StyledSearchBox'
import { useDebounce } from '@uidotdev/usehooks'

const SearchModal = ({ open, setOpen }) => {
  const [SearchKeyword, setSearchKeyword] = useState('')
  const SearchKeywordDebounced = useDebounce(SearchKeyword, 800)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} customBarackPoint={550}>
      <Main>
        <Title variant="h4" component="div" color="secondary">
          Search Your interest...
        </Title>
        <StyledSearchBox SearchText={SearchKeyword} setSearchText={setSearchKeyword} />
        <ContentSection SearchKeyword={SearchKeywordDebounced} />
      </Main>
    </Root>
  )
}

const Root = styled(StyledModal)`
  padding: 18px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 550px) {
    min-height: 53vh;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled(Typography)`
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
  @media (max-width: 410px) {
    font-size: 1.65rem;
  }
`

export default SearchModal
