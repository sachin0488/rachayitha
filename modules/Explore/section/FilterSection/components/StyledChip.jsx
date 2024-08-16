import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const StyledChip = ({ item }) => {
  const { t } = useTranslation()
  const { query, pathname } = useRouter()

  return (
    <Link href={`${pathname}?content_type=${query.content_type}&category=${query.category}&sort_by=${item.label.toLowerCase()}`}>
      <a>
        <Root className={query?.sort_by?.toLowerCase() === item.label.toLowerCase() ? 'active' : ''} label={item.label} />
      </a>
    </Link>
  )
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
`

export default StyledChip
