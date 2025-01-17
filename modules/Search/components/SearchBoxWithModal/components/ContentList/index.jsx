import styled from '@emotion/styled'
import ContentCard from './components/ContentCard'
import useSearchService from 'modules/Search/services/search.service'

import { InView } from 'react-intersection-observer'
import { Skeleton, Typography } from '@mui/material'

const ContentSection = ({ ranking, SearchKeyword, contentType, handleClose }) => {
  const { ContentList, isFetching, isFetchingNextPage, isError, error, fetchNextPage, hasNextPage } = useSearchService({
    SearchKeyword,
    contentType,
  })

  if (isError) {
    return (
      <Typography variant="h6" textAlign="center" marginTop={2}>
        {error?.message}
      </Typography>
    )
  }

  return (
    <Root>
      {ContentList?.map((item, index) => (
        <ContentCard key={index} item={item} contentType={contentType} onClick={handleClose} />
      ))}

      {(isFetching || isFetchingNextPage) && (
        <>
          <StyledSkeleton variant="rounded" />
          <StyledSkeleton variant="rounded" />
          <StyledSkeleton variant="rounded" />
        </>
      )}

      {ContentList?.length !== 0 && (
        <InView
          id="content-load-more"
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

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding-bottom: 15px;
  @media (max-width: 800px) {
    padding: 0;
  }

  @media (max-width: 400px) {
    padding-top: 0px;
  }
  isolation: isolate;
`
const StyledSkeleton = styled(Skeleton)`
  max-width: 550px;
  height: 118px;
  @media (max-width: 800px) {
    max-width: 100%;
  }
  @media (max-width: 465px) {
    height: 118px;
  }
  @media (max-width: 400px) {
    height: 118px;
  }
`
export default ContentSection
