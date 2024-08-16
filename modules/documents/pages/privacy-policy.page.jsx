// src/pages/PrivacyPolicyPage.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Root, { Main } from '../components/Root';

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <Root>
      <Main>
        <Heading main>{t('privacyPolicy.privacy_policy')}</Heading>
        <Paragraph>
          {t('privacyPolicy.privacyPolicyIntro')}
        </Paragraph>
        <Paragraph>
          {t('privacyPolicy.privacyPolicyContent')}
        </Paragraph>
        <Paragraph>
          {t('privacyPolicy.privacyPolicyAgreement')}
        </Paragraph>
        <Heading>{t('privacyPolicy.informationCollection')}</Heading>
        <Paragraph>
          {t('privacyPolicy.informationCollectionIntro')}
        </Paragraph>
        <table border="1" cellspacing="0" cellpadding="">
          <tbody>
            <tr>
              <th>{t('privacyPolicy.typeOfInformation')}</th>
              <th>{t('privacyPolicy.includes')}</th>
            </tr>
            <tr>
              <td>{t('privacyPolicy.registrationData')}</td>
              <td>{t('privacyPolicy.registrationDataDetails')}</td>
            </tr>
            <tr>
              <td>{t('privacyPolicy.usageData')}</td>
              <td>{t('privacyPolicy.usageDataDetails')}</td>
            </tr>
            <tr>
              <td>{t('privacyPolicy.paymentData')}</td>
              <td>{t('privacyPolicy.paymentDataDetails')}</td>
            </tr>
            <tr>
              <td>{t('privacyPolicy.customerSupport')}</td>
              <td>{t('privacyPolicy.customerSupportDetails')}</td>
            </tr>
          </tbody>
        </table>
        <Heading>{t('privacyPolicy.useOfInformation')}</Heading>
        <ul>
          <li>{t('privacyPolicy.useOfInformationItem1')}</li>
          <li>{t('privacyPolicy.useOfInformationItem2')}</li>
          <li>{t('privacyPolicy.useOfInformationItem3')}</li>
          <li>{t('privacyPolicy.useOfInformationItem4')}</li>
          <li>{t('privacyPolicy.useOfInformationItem5')}</li>
          <li>{t('privacyPolicy.useOfInformationItem6')}</li>
          <li>{t('privacyPolicy.useOfInformationItem7')}</li>
        </ul>
        <Heading>{t('privacyPolicy.thirdPartyAccess')}</Heading>
        <p>{t('privacyPolicy.thirdPartyAccessIntro')}</p>
        <ol>
          <li>
            <strong>{t('privacyPolicy.businessPartners')}</strong>
            <span>{t('privacyPolicy.businessPartnersDescription')}</span>
          </li>
        </ol>
        <Paragraph>{t('privacyPolicy.businessPartnersDetails')}</Paragraph>
        <Paragraph>{t('privacyPolicy.specialCircumstances')}</Paragraph>
        <Paragraph>{t('privacyPolicy.corporateRestructuring')}</Paragraph>
        <Paragraph>{t('privacyPolicy.userPublishedMaterial')}</Paragraph>
        <Heading>{t('privacyPolicy.informationStorage')}</Heading>
        <Paragraph>{t('privacyPolicy.informationStorageDetails')}</Paragraph>
        <Paragraph>{t('privacyPolicy.securityMeasures')}</Paragraph>
        <Paragraph>{t('privacyPolicy.securityAcknowledgement')}</Paragraph>
        <Heading>{t('privacyPolicy.informationCollectionMethods')}</Heading>
        <Paragraph>{t('privacyPolicy.informationCollectionIntro')}</Paragraph>
        <Paragraph>{t('privacyPolicy.cookiesCollection')}</Paragraph>
        <table border="1" cellspacing="0" cellpadding="">
          <tbody>
            <tr>
              <th>{t('privacyPolicy.cookieType')}</th>
              <th>{t('privacyPolicy.placedBy')}</th>
              <th>{t('privacyPolicy.natureOfTracking')}</th>
            </tr>
            <tr>
              <td>{t('privacyPolicy.mandatoryCookies')}</td>
              <td>{t('privacyPolicy.company')}</td>
              <td>{t('privacyPolicy.mandatoryCookiesDetails')}</td>
            </tr>
            <tr>
              <td>{t('privacyPolicy.analyticalCookies')}</td>
              <td>{t('privacyPolicy.thirdParty')}</td>
              <td>{t('privacyPolicy.analyticalCookiesDetails')}</td>
            </tr>
          </tbody>
        </table>
        <Paragraph>{t('privacyPolicy.cookiesOptOut')}</Paragraph>
        <Paragraph>{t('privacyPolicy.apiCalls')}</Paragraph>
        <Heading>{t('privacyPolicy.userRights')}</Heading>
        <Paragraph>{t('privacyPolicy.registrationRights')}</Paragraph>
        <Paragraph>{t('privacyPolicy.modificationDeletionRights')}</Paragraph>
        <Paragraph>{t('privacyPolicy.deletionRights')}</Paragraph>
        <Paragraph>{t('privacyPolicy.notificationsRights')}</Paragraph>
        <Paragraph>{t('privacyPolicy.optOutRights')}</Paragraph>
        <Heading>{t('privacyPolicy.policyChanges')}</Heading>
        <Paragraph>{t('privacyPolicy.policyChangesNotification')}</Paragraph>
        <Paragraph>{t('privacyPolicy.policyChangesAdvice')}</Paragraph>
        <Paragraph>{t('privacyPolicy.disagreement')}</Paragraph>
        <Heading>{t('privacyPolicy.grievanceRedressal')}</Heading>
        <Paragraph>{t('privacyPolicy.grievanceRedressalContact')}</Paragraph>
        <Heading>{t('privacyPolicy.conflictResolution')}</Heading>
        <Paragraph>{t('privacyPolicy.conflictResolutionDescription')}</Paragraph>
      </Main>
    </Root>
  );
};

export default PrivacyPolicyPage;
