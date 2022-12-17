import { GenreName } from '../../../../../hooks/useGenreButton'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { GenreButtonListMobileWrapper, GenreButtonsMobile } from './GenreButtonListStyle'
import useCategoryApi from 'Container/FeatureSection/api/category.hook'
import { isFake } from './GenreButtonList'
const RankingGenreButtonLIstMobile = ({ explore, section }) => {
  const { data } = useCategoryApi()
  const router = useRouter()
  const list = data?.data?.data
  const { genre } = router.query
  const path = `?content_type=${section}&genre=`
  return (
    <>
      <GenreButtonListMobileWrapper>
        {(isFake ? GenreName : list)?.map((button, index) => (
          <Link href={`/${explore}${path}${button.id}`}>
            <GenreButtonsMobile
              key={index}
              startIcon={button.id == genre ? <CheckBoxRoundedIcon /> : <CheckBoxOutlineBlankRoundedIcon />}
              className={router.asPath === `${explore}${path}${button.id}` ? 'genre' : ''}>
              {button.category_name}
            </GenreButtonsMobile>
          </Link>
        ))}
      </GenreButtonListMobileWrapper>
    </>
  )
}

export default RankingGenreButtonLIstMobile
