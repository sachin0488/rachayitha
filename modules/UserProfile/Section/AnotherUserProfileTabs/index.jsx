import React from 'react'
import styled from '@emotion/styled'
import { InView } from 'react-intersection-observer'
import { useState } from 'react'
import { Skeleton, Typography } from '@mui/material'

import useOriginalWorkService from 'modules/UserProfile/services/OriginalWork.service'
import CopyAllRoundedIcon from '@mui/icons-material/CopyAllRounded'
import WorkContentCard from './components/WorkContentCard'
import StyledChip from '../ProfileTabs/components/StyledChip'
import useAnotherUserWorkService from 'modules/UserProfile/services/AnotherUserWork.service'

const contentTypes = [
  'book',
  'poem',
  //'story',
]

const AnotherUserProfileTabs = ({ authorId }) => {
  const [selectedContentType, setSelectedContentType] = useState('book')
  const { ContentList, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useAnotherUserWorkService({
    contentType: selectedContentType,
    authorId: authorId,
  })

  return (
    <Root>
      <Typography variant="h4" fontWeight={600} color="secondary" marginTop={3}>
        Original Works
      </Typography>
      <ContentListBox>
        {contentTypes.map((item, index) => (
          <StyledChip key={item} active={selectedContentType === item} label={item} onClick={() => setSelectedContentType(item)} />
        ))}
      </ContentListBox>
      <Main>
        {isFetching ? (
          <>
            <StyledSkeleton variant="rounded" />
            <StyledSkeleton variant="rounded" />
            <StyledSkeleton variant="rounded" />
          </>
        ) : ContentList?.length === 0 ? (
          <NotAvailableBar>
            <CopyAllRoundedIcon sx={{ fontSize: 55 }} color="primary" />
            <Typography variant="h6" component="div" textAlign="center" fontSize={17} fontWeight={500} color="secondary">
              You have not created any {selectedContentType} yet
            </Typography>
          </NotAvailableBar>
        ) : (
          <>
            {ContentList?.map(item => (
              <WorkContentCard key={item.contentId} item={item} authorId={authorId} />
            ))}

            {ContentList?.length !== 0 && isFetchingNextPage && (
              <>
                <StyledSkeleton variant="rounded" height={160} />
                <StyledSkeleton variant="rounded" height={160} />
                <StyledSkeleton variant="rounded" height={160} />
              </>
            )}
            {ContentList?.length !== 0 && hasNextPage && (
              <InView
                id="library-list-load-more"
                as="div"
                threshold={1}
                delay={500}
                disabled={isFetching || isFetchingNextPage || !hasNextPage}
                onChange={(inView, entry) => {
                  if (inView && hasNextPage) {
                    fetchNextPage()
                  }
                }}
              />
            )}
          </>
        )}
      </Main>
    </Root>
  )
}

const StyledSkeleton = styled(Skeleton)`
  height: 238px;
  max-width: 158px;
  width: 158px;

  @media (max-width: 730px) {
    width: 100%;
    max-width: 100%;
    height: 238px;
  }
`

const NotAvailableBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 300px;
  max-width: 240px;
  align-self: center;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 13px;
  }
  @media (max-width: 540px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 13px;
  }

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 13px;
  }
`
const ContentListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 415px) {
    justify-content: flex-end;
    margin-left: auto;
  }
`

export default AnotherUserProfileTabs