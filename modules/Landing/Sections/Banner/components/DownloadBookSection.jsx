import React from 'react'
import TextSection from './TextSection'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

const DownloadBookSection = () => {
  const { t } = useTranslation('downloadBookSection')
  const is600x = useMediaQuery('(min-width: 600px)')

  const banner1 = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1668677637/Banner1_wcazjy.svg'

  return (
    <Root>
      <Main>
        <TextSection
          color="secondary"
          heading={
            <>
              {t('heading').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
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
          <Image alt="Download Banner" src={banner1} />

          <DownloadBar>
            <DownloadImage src={banner1} alt="Download Banner" />
            <DownloadText>
              <strong>{t('bookTitle')}</strong>
              <small>{t('downloading')}</small>
            </DownloadText>
            <DownloadRoundedIcon color="primary" fontSize="large" />
          </DownloadBar>
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
  @media (max-width: 425px) {
    width: 90%;
  }
`
const Image = styled.img`
  width: 100%;
`

const DownloadBar = styled.div`
  position: absolute;
  bottom: 25px;
  background-color: ${({ theme }) => theme.palette.background.accent}c4;
  backdrop-filter: blur(8px);
  border-radius: 10px;
  width: 115%;
  left: -7.5%;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  padding-inline: 10px;
  padding-block: 10px;
  padding-right: 17px;
  display: flex;
  align-items: center;
  gap: 15px;
`
const DownloadImage = styled.img`
  height: auto;
  width: 40px;
  border-radius: 3px;
`
const DownloadText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  small {
    color: ${({ theme }) => theme.palette.primary.main}bb;
    font-weight: 500;
    font-style: italic;
  }
`

export default DownloadBookSection
