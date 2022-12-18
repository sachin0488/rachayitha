import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import { GenreName } from '../../../../../hooks/useGenreButton'
import { GenreButtonListMobileWrapper, GenreButtonsMobile } from './GenreButtonListStyle'
import useCategoryApi from 'Container/FeatureSection/api/category.hook'
import { isFake } from './GenreButtonList'

const GenreButtonListMobile = ({ explore, section }) => {
  const { data } = useCategoryApi()
  const router = useRouter()
  const list = data?.data?.data
  const { sub_genre, genre } = router.query

  const path = `?content_type=${section}&genre=`

  return (
    <>
      <GenreButtonListMobileWrapper>
        {(isFake ? GenreName : list)?.map((button, index) => (
          <Link key={index} href={`${explore}${path}${button?.id}&sub_genre=${sub_genre}`}>
            <GenreButtonsMobile
              key={index}
              startIcon={genre == button?.id ? <CheckBoxRoundedIcon /> : <CheckBoxOutlineBlankRoundedIcon />}
              className={router?.asPath === `${explore}${path}${button?.id}&sub_genre=${sub_genre}` ? 'genre' : ''}>
              {button?.category_name}
            </GenreButtonsMobile>
          </Link>
        ))}
      </GenreButtonListMobileWrapper>
    </>
  )
}

export default GenreButtonListMobile
