import styled from '@emotion/styled';
import moment from 'moment/moment';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CarouselList from './components/CarouselList';
import ContentListSection from './components/ContentListSection';
import SelectSelectedTime from './components/SelectSelectedTime';

import { useTopCollectionService } from 'modules/Landing/services/TopCollection.service';

const TopCollection = () => {
  const { t } = useTranslation();
  const isTabletXSM = useMediaQuery('(min-width:900px)');
  const methods = useForm({
    defaultValues: {
      selectedTime: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    },
  });

  const selectedTime = methods.watch('selectedTime');

  const { data, isLoading, refetch } = useTopCollectionService({
    startDate: selectedTime,
    endDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
  });

  const collectionTimeList = [
    {
      label: t('topCollectionSection.lastWeek'),
      value: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    },
    {
      label: t('topCollectionSection.lastMonth'),
      value: moment().subtract(30, 'days').format('YYYY-MM-DD'),
    },
    {
      label: t('topCollectionSection.lastYear'),
      value: moment().subtract(365, 'days').format('YYYY-MM-DD'),
    },
  ];

  const List = [
    <ContentListSection key={1} contentName="Book" contentList={data?.books} isLoading={isLoading} />,
    <ContentListSection key={2} contentName="Poems" contentList={data?.poems} isLoading={isLoading} />,
    // <ContentListSection key={3} contentName="Shorts" contentList={data?.shorts} />,
  ];

  useEffect(() => {
    refetch();
  }, [selectedTime, refetch]);

  return (
    <Root>
      <FormProvider {...methods}>
        <Main>
          <HeadingBox>
            <Heading>{t('topCollectionSection.topCollectionHeader')}</Heading>
            <SelectSelectedTime name="selectedTime" menuList={collectionTimeList} />
          </HeadingBox>
          {isTabletXSM ? (
            <CollectionList>
              <ContentListSection contentName={t('Book')} contentList={data?.books} isLoading={isLoading} />
              <ContentListSection contentName={t('Poems')} contentList={data?.poems} isLoading={isLoading} />
              {/* <ContentListSection contentName="Shorts" contentList={Obj?.shorts} /> */}
            </CollectionList>
          ) : (
            <CarouselList List={List} />
          )}
        </Main>
      </FormProvider>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  gap: 10px;
  overflow: hidden;
`;

const HeadingBox = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 491px) {
    gap: 0px;
    flex-direction: column;
  }
`;

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  @media (max-width: 350px) {
    font-size: 25px;
  }
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const CollectionList = styled.div`
  width: 100%;
  height: calc(100% - 44px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export default TopCollection;
