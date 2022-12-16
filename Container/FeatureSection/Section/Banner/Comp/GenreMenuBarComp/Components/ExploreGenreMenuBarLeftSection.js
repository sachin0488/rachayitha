import { useRouter } from 'next/router'
import React from 'react'
import { LeftSideGenreMenuBar } from 'Container/FeatureSection/Common/Common.styles'
import Link from 'next/link'
import { GenreTitle, MenuItem, NovelIcon, PoemIcon } from 'Container/FeatureSection/Common/Common.styles'
import { FaBookReader } from 'react-icons/fa'

const ExploreGenreMenuBarLeftSection = () => {
  const router = useRouter()
  // const section = router.pathname.split('/')[1]
  const { genre, sub_genre } = router.query
  return (
    <>
      <LeftSideGenreMenuBar>
        <Link href={`/explore?content_type=novel&genre=${genre}&sub_genre=${sub_genre}`}>
          <MenuItem
            className={
              router.asPath === `/explore?content_type=novel&genre=${genre}&sub_genre=${sub_genre}` ? 'genre' : ''
            }>
            <NovelIcon />
            <GenreTitle>Novel</GenreTitle>
          </MenuItem>
        </Link>

        <Link href={`/explore?content_type=poem&genre=${genre}&sub_genre=${sub_genre}`}>
          <MenuItem
            className={
              router.asPath === `/explore?content_type=poem&genre=${genre}&sub_genre=${sub_genre}` ? 'genre' : ''
            }>
            <PoemIcon />
            <GenreTitle>Poem</GenreTitle>
          </MenuItem>
        </Link>
        <Link href={`/explore?content_type=short&genre=${genre}&sub_genre=${sub_genre}`}>
          <MenuItem
            className={
              router.asPath === `/explore?content_type=short&genre=${genre}&sub_genre=${sub_genre}` ? 'genre' : ''
            }>
            <FaBookReader />
            <GenreTitle>Short</GenreTitle>
          </MenuItem>
        </Link>
      </LeftSideGenreMenuBar>
    </>
  )
}

export default ExploreGenreMenuBarLeftSection
