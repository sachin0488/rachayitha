import React from 'react'
import Image from 'next/image'
import LogoImage from '../../../../public/logo.svg'
import { Wrapper, HeaderContent, LogoContainer, LogoTitle, NavMenu, MenuButton1, MenuButton2 } from './HeaderStyle'
import HeaderMiddleSection from '../HeaderMiddleSection/HeaderMiddleSection'
import Link from 'next/link'
import LanguageSelectComp from './LanguageSelectComp/LanguageSelectComp'

const Header = () => {
  return (
    <>
      <Wrapper>
        <HeaderContent>
          <LogoContainer style={{ width: '50%' }}>
            <Image src={LogoImage} sx={{ width: '55px', height: '55px' }} />
            <LogoTitle>E-Read</LogoTitle>
          </LogoContainer>
          <NavMenu>
            <LanguageSelectComp selectMargin="10px" label="Language" />

            <Link href={`/login`}>
              <MenuButton2>SIGN IN</MenuButton2>
            </Link>
          </NavMenu>
        </HeaderContent>
        <HeaderMiddleSection />
      </Wrapper>
    </>
  )
}

export default Header
