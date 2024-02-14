import { InView } from 'react-intersection-observer'
import { useState } from 'react'
import { Typography } from '@mui/material'

import StyledChip from '../components/StyledChip'
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded'
import BoughtContentCard from '../components/BoughtContentCard'
import clsx from 'clsx'
import { ContentContainer, ContentListBox, NotAvailableBar, StyledSkeleton, TabsRoot } from '../components/TabsCommonStyles'

import useBoughtProductService from 'modules/UserProfile/services/BoughtProduct.service'

const contentTypes = [
  'book',
  'poem',
  //'story',
]

const BoughtTab = () => {
  const [selectedContentType, setSelectedContentType] = useState('book')

  const { ContentList, fetchNextPage, hasNextPage, isFetching, isError, isFetchingNextPage } = useBoughtProductService({
    contentType: selectedContentType,
  })

  return (
    <TabsRoot>
      <ContentListBox>
        {contentTypes.map((item, index) => (
          <StyledChip key={item} active={selectedContentType === item} label={item} onClick={() => setSelectedContentType(item)} />
        ))}
      </ContentListBox>
      <ContentContainer
        className={clsx({
          'disabled-list': ContentList?.length === 0 && !isFetching && !isFetchingNextPage,
        })}>
        {isFetching ? (
          <>
            <StyledSkeleton variant="rounded" />
            <StyledSkeleton variant="rounded" />
            <StyledSkeleton variant="rounded" />
          </>
        ) : isError ? (
          <NotAvailableBar>
            <ReportGmailerrorredRoundedIcon sx={{ fontSize: 55 }} color="primary" />
            <Typography variant="h6" component="div" textAlign="center" fontSize={14} fontWeight={500} color="secondary">
              Something went wrong
            </Typography>
          </NotAvailableBar>
        ) : ContentList?.length === 0 ? (
          <NotAvailableBar>
            <Typography variant="h6" component="div" textAlign="center" fontSize={17} fontWeight={500} color="secondary">
              You have not bought any {selectedContentType} yet
            </Typography>
          </NotAvailableBar>
        ) : (
          <>
            {ContentList?.map(item => (
              <BoughtContentCard key={item?.bookId || item?.poemId} item={item} />
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
      </ContentContainer>
    </TabsRoot>
  )
}

export default BoughtTab
