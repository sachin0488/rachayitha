import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import GetStartedInputField from './components/GetStartedInputField';
import { Heading, SubHeading } from './style';
import BookBanners from './components/GetStartedInputField/BookBanners';
import PublishContent from '../PublishContent';

const GetStartedSection = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Heading>
        {t('expandYourVision')}
        <span>{t('literatureHere')}</span>
      </Heading>
      <SubHeading>{t('indiasOwnPlatform')}</SubHeading>
      {/* <GetStartedInputField /> */}
      <RootBanner>
        <div className="content">
          <PublishContent />
        </div>
        <BookBanners />
      </RootBanner>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  gap: 30px;
  padding-bottom: 160px;
  width: 100%;
  font-size: 16px;
  padding-top: 100px;
  @media (max-height: 900px) {
    padding-top: 10px;
    gap: 10px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 650px) {
    font-size: 11px;
    gap: 25px;
  }
  @media (max-width: 555px) {
    font-size: 10px;
  }
  @media (max-width: 510px) {
    font-size: 9px;
    gap: 20px;
  }
  @media (max-width: 460px) {
    font-size: 8px;
  }
  @media (max-width: 410px) {
    font-size: 7.5px;
  }
  @media (max-width: 380px) {
    font-size: 7px;
  }
  @media (max-width: 350px) {
    font-size: 6.5px;
  }
  @media (max-width: 321px) {
    font-size: 6px;
  }
`;

const RootBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-height: 900px) {
    top: 0%;
    .content {
      top: 15%;
    }
  }
  @media (max-width: 900px) {
    top: 0%;
    .content {
      top: 50%;
    }
  }
`;

export default GetStartedSection;
