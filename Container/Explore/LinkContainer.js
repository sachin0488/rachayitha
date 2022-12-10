import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GenreTitle, MenuItem } from './ExploreStyle'
import { useRouter } from 'next/router'

const LinkContainer = ({ href, img_url, genretitle }) => {
  const router = useRouter()
  const { genre, sub_genre } = router.query
  return (
    <>
      <Link href={`${href}&genre=${genre}&sub_genre=${sub_genre}`}>
        <MenuItem>
          <Image src={img_url} />
          <GenreTitle classN ame={router.asPath === `${href}&genre=${genre}&sub_genre=${sub_genre}` ? 'explore' : ''}>
            {genretitle}
          </GenreTitle>
        </MenuItem>
      </Link>
    </>
  )
}

export default LinkContainer
