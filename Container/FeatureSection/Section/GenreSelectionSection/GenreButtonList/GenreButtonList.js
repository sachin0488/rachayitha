import React from 'react'
import useCategoryApi from '../../../api/category.hook'
import { GenreName } from 'hooks/useGenreButton'
import { GenreButtonListWrapper } from './GenreButtonListStyle'
import { useRouter } from 'next/router'
import RankingGenreButton from '../GenreButton/Components/RankingGenreButton'
import ExploreGenreButton from '../GenreButton/Components/ExploreGenreButton'

export const isFake = true

const GenreButtonList = ({ explore, section, genreLead }) => {
  const { data } = useCategoryApi()
  const router = useRouter()
  const list = data?.data?.data

  const type = router.pathname.split('/')[1]

  return (
    <GenreButtonListWrapper>
      {type === 'explore'
        ? (isFake ? GenreName : list)?.map((platform, index) => (
            <ExploreGenreButton
              key={index}
              explore={explore}
              section={section}
              platformApi={platform.id}
              width="40%"
              platformButton={platform.category_name}
            />
          ))
        : (isFake ? GenreName : list)?.map((platform, index) => (
            <RankingGenreButton
              key={index}
              explore={explore}
              section={section}
              width="40%"
              platformApi={platform.id}
              platformButton={platform.category_name}
            />
          ))}
    </GenreButtonListWrapper>
  )
}

export default GenreButtonList
