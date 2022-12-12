import React from 'react'
import { Buttons, ButtonContainer } from 'Container/FeatureSection/Common/Common.styles'
import { genreName } from '../../hooks/useGenreButton'
import { useRouter } from 'next/router'
import Link from 'next/link'
const SubGenreButton = () => {
  const router = useRouter()
  const fullSection = router.pathname

  const { genre, content_type } = router.query

  return (
    <>
      <ButtonContainer>
        {genreName?.map((button, index) => (
          <Link href={`${fullSection}?content_type=${content_type}&lead=male&genre=${genre}&sub_genre=${button.name}`}>
            <Buttons
              className={
                router.asPath ===
                `${fullSection}?content_type=${content_type}&lead=male&genre=${genre}&sub_genre=${button.name}`
                  ? 'genre'
                  : ''
              }>
              {button.buttonName}
            </Buttons>
          </Link>
        ))}
      </ButtonContainer>
    </>
  )
}

export default SubGenreButton
