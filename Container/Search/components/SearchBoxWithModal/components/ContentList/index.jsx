import styled from '@emotion/styled'
import { useSearchList } from 'api/global.hook'
import useExplore from 'Container/Explore/services/explore.service'
import { useRouter } from 'next/router'
import ContentCard from './components/ContentCard'
import useSearchService from 'Container/Search/services/search.service'
import { InView } from 'react-intersection-observer'
import { Skeleton } from '@mui/material'

const ContentSection = ({ ranking, SearchKeyword }) => {
  const { ContentList, isFetching, isFetchingNextPage, isError, error, fetchNextPage, hasNextPage } = useSearchService({
    SearchKeyword,
  })

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  return (
    <Root>
      {ContentList?.map((item, index) => (
        <ContentCard key={index} item={item} index={index} ranking={ranking} />
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
  gap: 10px;
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
