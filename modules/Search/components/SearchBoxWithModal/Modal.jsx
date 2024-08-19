import { useMemo } from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useDebounce } from '@uidotdev/usehooks'
import { useCallback, useState } from 'react'

import { StyledModal } from 'components/StyledModal'

import ContentSection from './components/ContentList'
import StyledSearchBox from './components/StyledSearchBox'
import TabSection from './components/TabSection'
import { ContentType } from 'modules/RecommendationSlider/constants/common.constants'
import { useTranslation } from 'next-i18next'
const tabs = [
  { id: 1, label: 'Book', value: ContentType.BOOK },
  { id: 2, label: 'Poem', value: ContentType.POEM },
]

const SearchModal = ({ open, setOpen }) => {
  const [SearchKeyword, setSearchKeyword] = useState('')
  const [contentTypeId, setContentTypeId] = useState(tabs?.[0]?.id)

  const contentType = useMemo(() => {
    return tabs.find(item => item.id === contentTypeId)?.value
  }, [contentTypeId])

  const SearchKeywordDebounced = useDebounce(SearchKeyword, 800)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const { t } = useTranslation("common");
  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={550}>
      <Main>
        <Title variant="h4" component="div" color="secondary">
          {t('searchModel.title')}
        </Title>
        <TabSection currentTabId={contentTypeId} tabs={tabs} onTabChange={setContentTypeId} />
        <StyledSearchBox SearchText={SearchKeyword} setSearchText={setSearchKeyword} />
        <ContentSection SearchKeyword={SearchKeywordDebounced} contentType={contentType} handleClose={handleClose} />
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
