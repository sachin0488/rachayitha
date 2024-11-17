import React from 'react'
import styled from '@emotion/styled'

import LogoBox from './components/LogoBox'
import SignInButton from './components/SignInButton'
import SelectLanguage from './components/SelectLanguage'
// import { mainMaxWidth } from 'modules/Landing/common/styles'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();
  const isMobile327sx = useMediaQuery('(max-width: 327px)')

  return (
    <>
      <HiddenHeader variant="h1" component="h1">
        {t('description')}-{t('indiasOwnPlatform')}
      </HiddenHeader>
      <Root>
      <LogoBox />
      <NavSection>
        <SelectLanguage />
        {/* {!isMobile327sx && <SignInButton />} */}
        <SignInButton />
      </NavSection>
    </Root>
    </>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding-block: 35px;
  z-index: 100;
  padding-inline: var(--main-side-spacing);
  width: 100%;
  max-width: var(--main-max-width);
  @media (max-width: 1000px) {
    padding-block: 25px;
  }
  @media (max-width: 405px) {
    padding-block: 20px;
  }
  @media (max-width: 327px) {
    /* align-items: flex-start; */
  }
`

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  @media (max-width: 405px) {
    gap: 10px;
  }
  @media (max-width: 359px) {
    gap: 8px;
  }
  @media (max-width: 327px) {
    /* flex-direction: column; */
    /* align-items: flex-end; */
  }
`

const HiddenHeader = styled.h1`
    position: absolute; 
    left: -9999px; 
    top: auto; 
    width: 1px; 
    height: 1px; 
    overflow: hidden;
`

export default Header
