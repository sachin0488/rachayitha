import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

const getArrayFromURIString = uriString => {
  if (uriString) {
    return uriString.split(',')
  }
  return []
}

const getURIStringFromArray = array => {
  if (array) {
    return array.join(',')
  }
  return ''
}

const StyledCheckButton = ({ contentType, category }) => {
  const router = useRouter()

  const categoryIds = useMemo(() => {
    let queryParameters = new URLSearchParams({
      category: router.query.category,
    })
    return getArrayFromURIString(queryParameters.get('category'))
  }, [router.query.category])

  const newCategoryIds = useMemo(() => {
    let newCategoryIds = [...categoryIds]

    if (categoryIds.includes(String(category.categoryId))) {
      newCategoryIds = newCategoryIds.filter(id => id !== String(category.categoryId))
    } else {
      newCategoryIds.push(String(category.categoryId))
    }

    if (newCategoryIds.includes('0')) {
      newCategoryIds = newCategoryIds.filter(id => id !== '0')
    }
    return getURIStringFromArray(newCategoryIds)
  }, [categoryIds, category.categoryId])

  const isSelected = useMemo(() => {
    return router.query.content_type === contentType && categoryIds.includes(String(category.categoryId))
  }, [router.query.content_type, contentType, categoryIds, category.categoryId])

  const href = useMemo(() => {
    let queryParameters

    if (category.categoryId === 0) {
      queryParameters = new URLSearchParams({
        content_type: contentType,
        category: [0],
      })
    } else if (router.query.content_type === contentType) {
      queryParameters = new URLSearchParams({
        category: newCategoryIds,
        content_type: contentType,
      })
    } else {
      queryParameters = new URLSearchParams({
        category: [category.categoryId],
        content_type: contentType,
      })
    }

    if (router.query.sort_by) {
      queryParameters.append('sort_by', router.query.sort_by)
    }

    return `${router.pathname}?${queryParameters.toString()}`
  }, [category.categoryId, contentType, newCategoryIds, router.pathname, router.query.content_type, router.query.sort_by])

  return (
    <Link href={href}>
      <a>
        <Root className={isSelected ? 'selected' : ''}>
          <Typography variant="inherit">{category.categoryName}</Typography>
        </Root>
      </a>
    </Link>
  )
}

const Root = styled(Button)`
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 10px;
  border: none;
  text-align: left;
  display: flex;
  width: fit-content;
  width: 100%;
  line-height: 1.29;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.secondary.main};
  background: ${({ theme }) => theme.palette.primary.main}10;
  &.selected {
    background-color: ${({ theme }) => theme.palette.primary.main};
    background: linear-gradient(122deg, rgb(54 8 163) 0%, rgb(148 106 245) 100%);
    color: white;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main}29;
  }

  &.selected:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

// const Root = styled(Button)`
//   font-weight: 500;
//   padding: 10px 15px;
//   color: ${({ theme }) => theme.palette.secondary.main};
//   border-radius: 10px;
//   transition: 0.35s ease-in-out;
//   text-transform: capitalize;
//   justify-content: start;
//   width: 100%;
//   line-height: 1;
//   display: flex;
//   align-items: center;
//   gap: 1px;

//   &.selected {
//     background: ${({ theme }) => theme.palette.primary.main}10;
//     color: ${({ theme }) => theme.palette.secondary.main};
//   }

//   &:hover {
//     background: ${({ theme }) => theme.palette.primary.main}1a;
//     /* color: ${({ theme }) => theme.palette.primary.main}; */
//   }

//   .MuiButton-startIcon {
//     margin-right: 4x;
//     margin-left: -4px;
//   }
//   .MuiButton-endIcon {
//     margin-right: -4px;
//     margin-left: 7px;
//   }
// `

export default StyledCheckButton
