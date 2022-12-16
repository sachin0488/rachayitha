import React from 'react'
import { GenreName } from 'hooks/useGenreButton'
import { GenreButtonListWrapper } from './GenreButtonListStyle'
import { useRouter } from 'next/router'
import RankingGenreButton from '../GenreButton/Components/RankingGenreButton'
import ExploreGenreButton from '../GenreButton/Components/ExploreGenreButton'
const GenreButtonList = ({ explore, section, genreLead }) => {
  const router = useRouter()

  const type = router.pathname.split('/')[1]

  return (
    <GenreButtonListWrapper>
      {type === 'explore'
        ? GenreName.map(platform => (
            <ExploreGenreButton
              explore={explore}
              section={section}
              platformApi={platform.name}
              width="40%"
              platformButton={platform.buttonName}
              genreLead={genreLead}
            />
          ))
        : GenreName.map(platform => (
            <RankingGenreButton
              explore={explore}
              section={section}
              width="40%"
              platformApi={platform.name}
              platformButton={platform.buttonName}
              genreLead={genreLead}
            />
          ))}
    </GenreButtonListWrapper>
  )
}

export default GenreButtonList
