import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const StyledChip = ({ item }) => {
  const { query, pathname } = useRouter()
  return (
    <Link href={`/${pathname}?content_type=${query.content_type}&category=${query.category}&sort_by=${item.label}`}>
      <a>
        <Root
          color={query?.sort_by?.toLowerCase() === item.label.toLowerCase() ? 'primary' : 'default'}
          label={item.label}
          onClick={() => {}}
        />
      </a>
    </Link>
  )
}

const Root = styled(Chip)`
  font-weight: 600;
`

export default StyledChip
