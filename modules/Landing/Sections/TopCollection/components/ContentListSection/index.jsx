import styled from '@emotion/styled'
// import { NotAvailableBar } from 'modules/Landing/components/CardComponents'
import React from 'react'
import ContentCard from './ContentCard'
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded'
import { Skeleton } from '@mui/material'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import { NotAvailableBar } from 'modules/RecommendationSlider/cards/components'
import { useTranslation } from 'react-i18next'
const ContentListSection = ({ contentName, contentList, isLoading }) => {
  const { t } = useTranslation();
  if (isLoading)
    return (
      <Root>
        <ContentName>{contentName}</ContentName>
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
        <StyledSkeleton variant="rounded" height={125} />
      </Root>
    )

  return (
    <Root>
      <ContentName>{contentName}</ContentName>
      {contentList?.length === 0 || contentList === null ? (
        <NotAvailableBar Icon={MenuBookRoundedIcon} text={t('noContentMessage')} />
      ) : (
        contentList?.map(item => <ContentCard key={item.id} item={item} />)
      )}
    </Root>
  )
}

const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  max-width: 650px;
  @media (max-width: 900px) {
    width: 68vw;
  }
`

const Root = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 33%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const ContentName = styled.div`
  font-weight: 600;
  font-size: 27px;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 3;
`

export default ContentListSection
