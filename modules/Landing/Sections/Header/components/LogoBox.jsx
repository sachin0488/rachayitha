import styled from '@emotion/styled'
import React from 'react'
import Link from 'next/link'

const LogoBox = () => {
  return (
    <Link href={'/'}>
      <a>
        <LogoImage src="/rachayitha_logo_500.svg" />
      </a>
    </Link>
  )
}

const LogoImage = styled.img`
  height: 35px;
  height: 36px;
  width: auto;
  margin-bottom: -4px;
  user-select: none;
`

export default LogoBox
