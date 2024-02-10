import styled from '@emotion/styled'
import { ImageRow, StyledImage } from './styles'
import { useHeroListService } from 'modules/Landing/services/HeroList.service'
import Link from 'next/link'
import { Tooltip } from '@mui/material'
import { useMemo } from 'react'

const reduceArrayToThree = array => {
  return array.slice(0, 2)
}

const BookBanners = () => {
  const { data } = useHeroListService()

  const RowList = useMemo(
    () => [data?.first, data?.second, data?.third].map(item => reduceArrayToThree(item || [])),
    [data?.first, data?.second, data?.third],
  )

  return (
    <Root>
      {RowList?.map((ImageList, index) => (
        <ImageRow key={index} sx={{ margin: '0px 0px -131px 0px' }}>
          {ImageList?.map(({ name, id, coverImage, contentType, slug }, index) => (
            <Link href={`/${contentType}/${id}/${slug}`} key={index}>
              <a>
                <Tooltip title={name} placement="top">
                  <StyledImage src={coverImage} width="218px" height="253px" />
                </Tooltip>
              </a>
            </Link>
          ))}
        </ImageRow>
      ))}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding-inline: 20px;
  margin-top: 30px;
  /* width: 100%; */
  /* margin-top: -40px; */
  z-index: -1;


  /* position: absolute; */

  /* top: 40%; */

  /*
  @media (max-height: 1200px) {
    margin-top: -100px;
  }
  @media (max-height: 1140px) {
    margin-top: -200px;
  }
  @media (max-height: 1055px) {
    margin-top: -300px;
  }
  @media (max-height: 954px) {
    margin-top: -400px;
  }
  @media (max-height: 874px) {
    margin-top: -500px;
  }
  @media (max-height: 670px) {
    margin-top: -600px;
  }
  @media (max-height: 609px) {
    margin-top: -650px;
  }
  @media (max-height: 563px) {
    margin-top: -700px;
  }
  @media (max-height: 524px) {
    margin-top: -750px;
  } */
`

export default BookBanners
