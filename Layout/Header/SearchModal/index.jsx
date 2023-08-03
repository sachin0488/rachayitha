import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { useCallback, useState } from 'react'

import { StyledModal } from 'Components/StyledModal'

import ContentSection from './components/ContentList'
import StyledSearchBox from './components/StyledSearchBox'

const SearchModal = ({ open, setOpen }) => {
  const [SearchText, setSearchText] = useState('')

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={400}>
      <Main>
        <Title variant="h4" component="div" color="secondary">
          Search Your interest...
        </Title>
        <StyledSearchBox SearchText={SearchText} setSearchText={setSearchText} />
        <ContentSection keyword={SearchText} />
      </Main>
    </Root>
  )
}

const Root = styled(StyledModal)`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Title = styled(Typography)`
  font-weight: 600;
`
const Bottom = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`
const StyledButton = styled(Button)`
  font-weight: 600;
`

export default SearchModal
