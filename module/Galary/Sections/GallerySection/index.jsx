/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled'
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import React from 'react'

const itemData = Array.from(new Array(20)).map((_, index) => ({
  img: `/bucket/IMG_${index + 1}.jpg`,
  title: 'img',
}))

const GallerySection = () => {
  const isTablet = useMediaQuery(`(max-width: 1150px)`)
  const isTabletSX = useMediaQuery(`(max-width: 950px)`)
  const isMobile = useMediaQuery(`(max-width: 600px)`)

  return (
    <Root>
      <Main>
        <ImageList
          sx={{ width: '100%', height: 'fit-content' }}
          variant="quilted"
          cols={isTablet ? (isTabletSX ? (isMobile ? 1 : 2) : 3) : 5}
          gap={isMobile ? 20 : 6}>
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: isMobile && '10px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  gap: 10px;
  overflow: hidden;
`

export default GallerySection
