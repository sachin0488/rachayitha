import React from 'react'
import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import ContentCard from '../components/ContentCard'
import { InView } from 'react-intersection-observer'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import useLibraryService from 'Container/UserProfile/services/Library.service'

const LibraryTab = () => {
  const { ContentList, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useLibraryService()

  if (isFetching)
    return (
      <Root>
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
        <StyledSkeleton variant="rounded" />
      </Root>
    )

  if (ContentList?.length === 0)
    return (
      <NotAvailableBar>
        <LibraryAddCheckIcon sx={{ fontSize: 55 }} color="primary" />
        <Typography variant="h6" component="div" textAlign="center" fontSize={17} fontWeight={500} color="secondary">
          Add Your First Book or Poem to Library
        </Typography>
      </NotAvailableBar>
    )

  return (
    <Root>
      {ContentList?.map(item => (
        <ContentCard key={item.bookId} item={item} />
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

export default LibraryTab
