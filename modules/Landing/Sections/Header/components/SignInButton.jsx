import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SignInButton = () => {
  return (
    <Link href="/login">
      <a>
        <Root variant="contained">Sign In</Root>
      </a>
    </Link>
  )
}

const Root = styled(Button)`
  text-transform: capitalize;
  @media (min-width: 650px) {
    font-size: 1rem;
  }
  box-shadow: 2px 2px 20px 0px ${({ theme }) => theme.palette.primary.main}b8;
`

export default SignInButton
