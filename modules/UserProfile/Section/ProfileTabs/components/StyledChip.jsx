import React from 'react'
import styled from '@emotion/styled'

import { Chip } from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
const StyledChip = ({ label, onClick, active }) => {
  const { t } = useTranslation("common")
  return <Root className={active && 'active'} label={t(label)} onClick={onClick} />
}

const Root = styled(Chip)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  background: ${({ theme }) => theme.palette.primary.main}11;
  transition: 0.25s ease-in;
  &.active {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
  border-radius: 10px;
  text-transform: capitalize;
`

export default StyledChip
