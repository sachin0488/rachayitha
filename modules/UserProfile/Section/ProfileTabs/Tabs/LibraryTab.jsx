import { InView } from 'react-intersection-observer';
import { useState } from 'react';
import { Typography } from '@mui/material';

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import LibraryContentCard from '../components/LibraryContentCard';
import StyledChip from '../components/StyledChip';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';
import { ContentType } from 'modules/UserProfile/constants/common.constants';
import clsx from 'clsx';
import { ContentContainer, ContentListBox, NotAvailableBar, StyledSkeleton, TabsRoot } from '../components/TabsCommonStyles';

import useLibraryService from 'modules/UserProfile/services/Library.service';
import { useTranslation } from 'next-i18next';

const contentTypes = [
  ContentType.BOOK,
  ContentType.POEM,
  //'story',
];

const LibraryTab = () => {
  const { t } = useTranslation("common");
  const [selectedContentType, setSelectedContentType] = useState(ContentType.BOOK);

  const { ContentList, fetchNextPage, hasNextPage, isFetching, isError, isFetchingNextPage } = useLibraryService({
    contentType: selectedContentType,
  });

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
              {t('libraryTab.errorMessage')}
            </Typography>
          </NotAvailableBar>
        ) : ContentList?.length === 0 ? (
          <NotAvailableBar>
            <LibraryAddCheckIcon sx={{ fontSize: 55 }} color="primary" />
            <Typography variant="h6" component="div" textAlign="center" fontSize={17} fontWeight={500} color="secondary">
              {t('libraryTab.noContentMessage', { contentType: selectedContentType.toUpperCase() })}
            </Typography>
          </NotAvailableBar>
        ) : (
          <>
            {ContentList?.map(item => (
              <LibraryContentCard key={item.contentId} item={item} contentType={selectedContentType} />
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
                    fetchNextPage();
                  }
                }}
              />
            )}
          </>
        )}
      </ContentContainer>
    </TabsRoot>
  );
};

export default LibraryTab;
