import React from 'react'
import { InView } from 'react-intersection-observer'
import { useState } from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import WorkContentCard from '../components/WorkContentCard'
import StyledChip from '../components/StyledChip'
import CopyAllRoundedIcon from '@mui/icons-material/CopyAllRounded'
import clsx from 'clsx'
import { ContentContainer, ContentListBox, NotAvailableBar, StyledSkeleton, TabsRoot } from '../components/TabsCommonStyles'

import useOriginalWorkService from 'modules/UserProfile/services/OriginalWork.service'

const contentTypes = [
  'book',
  'poem',
  //'story',
]

const OriginalWorkTab = () => {
  const { t } = useTranslation("common");
  const [selectedContentType, setSelectedContentType] = useState('book')
  const { ContentList, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useOriginalWorkService({
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
        ) : ContentList?.length === 0 ? (
          <NotAvailableBar>
            <CopyAllRoundedIcon sx={{ fontSize: 55 }} color="primary" />
            <Typography variant="h6" component="div" textAlign="center" fontSize={17} fontWeight={500} color="secondary">
              {t('originalWorkTab.noContentMessage', { contentType: selectedContentType })}
            </Typography>
          </NotAvailableBar>
        ) : (
          <>
            {ContentList?.map(item => (
              <WorkContentCard key={item.contentId} item={item} />
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

export default OriginalWorkTab
