import { Skeleton } from '@mui/material'
import {
  Cards,
  CardsSubWrapper,
  CardLeftSideContent,
  CardRightSideContent,
  ButtonContainer,
} from '../../../Common/Common.styles'
import React from 'react'

const Loading = ({ card, index }) => {
  return (
    <>
      <CardsSubWrapper key={index}>
        <Cards style={{ width: '100%' }}>
          <CardLeftSideContent>
            <Skeleton sx={{ width: '100%', height: '120%' }} />
          </CardLeftSideContent>
          <CardRightSideContent>
            <ButtonContainer>
              {card?.hashtag?.map(hash => (
                <Skeleton sx={{ fontSize: '16px', width: '30%' }} />
              ))}
            </ButtonContainer>
            <Skeleton sx={{ fontSize: '19px', width: '60%' }} />
            <Skeleton
              sx={{
                fontSize: '19px',
                width: '70%',
                height: '220px',
              }}
            />
          </CardRightSideContent>
        </Cards>
      </CardsSubWrapper>
    </>
  )
}

export default Loading
