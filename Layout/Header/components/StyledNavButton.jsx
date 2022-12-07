import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const StyledNavButton = ({ Icon, label, link, path }) => {
  return (
    <Link href={link}>
      <a>
        <Root startIcon={<Icon style={IconStyle} />}>{label}</Root>
      </a>
    </Link>
  )
}

const IconStyle = {}

const Root = styled(Button)`
  font-weight: 500;
  font-size: 1rem;
  padding: 5px 13px;
  /* box-shadow: 3px 3px 10px -0.5px ${({ theme }) => theme.palette.primary.main}30; */
  color: #000000cb;
  border-radius: 8px;
  transition: box-shadow 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}01;
    color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 3px 3px 12px 0px ${({ theme }) => theme.palette.primary.main}59;
  }
  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 4px;
  }
`

export default StyledNavButton
