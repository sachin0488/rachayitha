import React, { useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'

import { Skeleton, Tab, tabClasses, Tabs, tabsClasses, Typography } from '@mui/material'

import { useRouter } from 'next/router'
import { usePoemDetailsService } from 'Container/PoemDetail/services/PoemDetails.service'
import useCommentListService from 'Container/PoemDetail/services/CommentList.service'
import CreateCommentSection from './components/CreateCommentSection'
import CommentCard from './components/CommentCard'
import { InView } from 'react-intersection-observer'

const TabList = [
  {
    id: 1,
    label: 'Liked',
    sort: 'like',
  },
  {
    id: 2,
    label: 'Newest',
    sort: '-date',
  },
]

const CommentSection = () => {
  const [value, setValue] = useState(0)

  const { query } = useRouter()
  const { Data } = usePoemDetailsService({ poemId: query?.poemId })

  const { ContentList, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isError } = useCommentListService({
    poemId: query?.poemId,
    parentCommentId: null,
    sortBy: TabList[value].sort,
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Root>
      <Main>
        <Nav>
          <StyledTabs value={value} onChange={handleChange} aria-label="Comment List">
            {TabList.map((item, index) => (
              <StyledTab key={item.id} label={item.label} {...a11yProps(index)} />
            ))}
          </StyledTabs>

          <CommentCountText variant="h6" component="div" color="secondary">
            ({Data?.commentCount} Comments)
          </CommentCountText>
        </Nav>
        <CreateCommentSection sortBy={TabList[value].sort} />

        {ContentList?.map(item => (
          <CommentCard key={item.commentId} item={item} sortBy={TabList[value].sort} />
        ))}

        {(isFetching || isFetchingNextPage) && (
          <>
            <StyledSkeleton variant="rounded" height={160} />
            <StyledSkeleton variant="rounded" height={160} />
            <StyledSkeleton variant="rounded" height={160} />
          </>
        )}
        {ContentList?.length !== 0 && (
          <InView
            id="comment-load-more"
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
      </Main>
    </Root>
  )
}
const Root = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 0px;
  flex-direction: column;
  @media (max-width: 800px) {
    gap: 10px;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Nav = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  @media (max-width: 320px) {
    gap: 0px;
    justify-content: space-between;
    & > :nth-of-type(2) {
      display: none;
    }
  }
`

const StyledSkeleton = styled(Skeleton)`
  max-width: 650px;
`

const a11yProps = index => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const CommentCountText = styled(Typography)`
  font-weight: 600;
  align-self: center;
  white-space: nowrap;
  @media (max-width: 420px) {
    font-weight: 500;
    font-size: 14px;
  }
`

const StyledTab = styled(Tab)`
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.palette.text.icon};
  text-transform: capitalize;
  font-weight: 500;

  &.${tabClasses.root} {
    color: ${({ theme }) => theme.palette.secondary.main};
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: 500;
  }
  @media (max-width: 350px) {
    padding: 0px;
    width: fit-content;
  }

  &.${tabClasses.selected} {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  transition: 0.1s ease-in 150ms;
`

const StyledTabs = styled(Tabs)`
  overflow: visible;
  display: flex;

  & .${tabsClasses.flexContainer} {
    display: flex;
    gap: 20px;
    @media (max-width: 350px) {
      gap: 0px;
    }
  }

  & .${tabsClasses.scroller} {
    overflow: visible;
  }

  & .${tabsClasses.indicator} {
    background: ${({ theme }) => theme.palette.primary.main};
    height: 3px;
    border-radius: 2px;
    z-index: 1;
    font-weight: 500;
  }
`

export default CommentSection