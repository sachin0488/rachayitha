import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useDebounce } from '@uidotdev/usehooks'
import { useCallback, useState } from 'react'

import { StyledModal } from 'Components/StyledModal'

import ContentSection from './components/ContentList'
import StyledSearchBox from './components/StyledSearchBox'

const SearchModal = ({ open, setOpen }) => {
  const [SearchKeyword, setSearchKeyword] = useState('')
  const SearchKeywordDebounced = useDebounce(SearchKeyword, 800)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={550}>
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
