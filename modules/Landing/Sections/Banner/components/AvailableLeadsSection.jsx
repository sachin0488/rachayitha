import React from 'react'
import TextSection from './TextSection'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'next-i18next'

const AvailableLeadsSection = () => {
  const { t } = useTranslation('common')
  const is600x = useMediaQuery('(min-width: 600px)')

  return (
    <Root>
      <Main>
        <TextSection
          color="secondary"
          heading={
            <>
              <span style={{ whiteSpace: 'nowrap' }}>{t('heading')}</span>
              <br />
              {t('heading')}
            </>
          }
          subHeading={
            <>
              {t('subHeading')}
              {is600x && <br />}
            </>
          }
        />
        <ShowSection>
          <LeadCard style={{ color: '#8049FF' }}>
            <StyledImage src="/male_lead.jpeg" alt="MaleLead" />
            <LeadCardText>{t('maleLead')}</LeadCardText>
          </LeadCard>

          <LeadCard style={{ color: '#F450AE' }}>
            <StyledImage src="/female_lead.jpeg" alt="FemaleLead" />
            <LeadCardText>{t('femaleLead')}</LeadCardText>
          </LeadCard>
        </ShowSection>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 80px;
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-inline: var(--main-side-spacing);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 50px;
  }
`

const ShowSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 400px) {
    gap: 10px;
  }
`
const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 355/476;
  max-width: 250px;
`

const LeadCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 400px) {
    gap: 10px;
  }
`

const LeadCardText = styled.div`
  padding: 5px 3px;
  border-radius: 10px;
  border: 2px solid currentColor;
  font-size: 23px;
  @media (max-width: 400px) {
    font-size: 5.7vw;
  }
  font-weight: 600;
  text-align: center;
`

export default AvailableLeadsSection
