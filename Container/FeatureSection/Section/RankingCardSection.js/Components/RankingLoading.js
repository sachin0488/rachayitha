import React from 'react'
import { Skeleton } from '@mui/material'
import { ButtonContainer } from 'Container/FeatureSection/Common/Common.styles'
import {
  Cards,
  LeftSideCardPart,
  RightSideCardPart,
  HashtagAndButtonSection,
  ButtonSection,
  RatingContainer,
  RatingGenreAuthorContainer,
} from '../Styles'

const RankingLoading = ({ card, index }) => {
  return (
    <>
      <Cards>
        <LeftSideCardPart>
          <Skeleton sx={{ width: '100%', height: '120%' }} />
        </LeftSideCardPart>
        <RightSideCardPart>
          <HashtagAndButtonSection>
            <ButtonContainer>
              {card.hashtag.map(hash => (
                <Skeleton sx={{ fontSize: '17px', width: '17%' }} />
              ))}
            </ButtonContainer>
            <ButtonSection>
              <Skeleton
                sx={{
                  fontSize: '30px',
                  width: '30%',
                  borderRadius: '19px',
                }}
              />

              <Skeleton
                sx={{
                  fontSize: '30px',
                  width: '30%',
                  borderRadius: '19px',
                }}
              />
            </ButtonSection>
          </HashtagAndButtonSection>
          <Skeleton
            sx={{
              fontSize: '23px',
              width: '30%',
            }}
          />
          <Skeleton
            sx={{
              fontSize: '15px',
              width: '70%',
            }}
          />
          <RatingGenreAuthorContainer>
            <RatingContainer width="5%">
              <Skeleton
                sx={{
                  fontSize: '15px',
                  width: '100%',
                }}
              />
            </RatingContainer>
            <Skeleton
              sx={{
                fontSize: '15px',
                width: '10%',
              }}
            />
            <Skeleton
              sx={{
                fontSize: '15px',
                width: '10%',
              }}
            />
          </RatingGenreAuthorContainer>
        </RightSideCardPart>
      </Cards>
    </>
  )
}

export default RankingLoading
