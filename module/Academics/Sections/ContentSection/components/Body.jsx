import styled from '@emotion/styled'
import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const Body = ({ item }) => {
  const isTablet = useMediaQuery(`(min-width: ${item.breakPoint}px)`)
  const position = item.id % 2 === 0 ? 'left' : 'right'

  return (
    <Root key={item.id}>
      {position === 'left' && isTablet && item.imgSrc && <Image className={position} src={item.imgSrc} alt="" />}
      <Text color="secondary" variant="subtitle1" textAlign="justify">
        {!isTablet && item.imgSrc && <Image className={position} src={item.imgSrc} alt="" />}
        <p
          dangerouslySetInnerHTML={{
            __html: item.text,
          }}
        />
        {item?.list && (
          <ul>
            {item.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        )}
        {item?.numberedList && (
          <ol>
            {item.numberedList.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ol>
        )}
      </Text>
      {position === 'right' && item.imgSrc && isTablet && <Image className={position} src={item.imgSrc} alt="" />}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  display: flex;
  padding: 1.25rem;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff59;
  box-shadow: 1px 3px 38px 1px #0f012f16;
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 530px) {
    padding: 0.9rem;
  }
`

const Text = styled(Typography)`
  --max-lines: 7;
  @media (max-width: 850px) {
    &.read_more {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--max-lines);
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`

const Image = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 10px;
  float: left;
  margin-right: 28px;
  &.right {
    margin-right: 0px;
    margin-left: 20px;
    float: right;
  }
  box-shadow: 2px 2px 30px 0 rgb(0 0 0 / 10%);
  @media (max-width: 850px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    float: initial;
    &.right {
      margin-right: 0px;
      margin-left: 0px;
      float: initial;
    }
  }
`

export default Body
