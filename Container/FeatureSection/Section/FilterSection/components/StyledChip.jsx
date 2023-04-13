import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { resetFeaturedList, selectFeaturedList, setFeaturedListPage } from 'Container/FeatureSection/slices/featured.slice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StyledChip = ({ item }) => {
  const { query, pathname } = useRouter()
  const dispatch = useDispatch()
  const featured = useSelector(selectFeaturedList)

  return (
    <Link href={`${pathname}?content_type=${query.content_type}&category=${query.category}&sort_by=${item.label}`}>
      <a>
        <Root
          className={query?.sort_by?.toLowerCase() === item.label.toLowerCase() ? 'active' : ''}
          label={item.label}
          onClick={() => {
            const address = `${query.category}/${query.content_type}/${item.label}`
            if (featured?.address !== address) {
              dispatch(resetFeaturedList())
            }
          }}
        />
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
