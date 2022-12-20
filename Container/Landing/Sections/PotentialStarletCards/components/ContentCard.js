import React from 'react'
import { AddIcon } from '../../WeeklyFeatured/components/ContentCard'
import {
  PotentialStarletContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgBox,
  Img,
  Fantasy,
  Rating,
  LeftSideImgContent,
  RightSideImgContent,
  AlignRatingAndFantasySection,
  SmallImg,
} from '../PotentialStartletCardsStyle'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'
import styled from '@emotion/styled'

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)
  return (
    <>
      <PotentialStarletContentCard key={item.id}>
        {isLoggedIn ? (
          <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
            <AddOutlinedIcon />
          </AddIcon>
        ) : (
          <></>
        )}
        <Link href={isLoggedIn ? `/book/${item.id}` : `/login`}>
          <SubRoot>
            <ImgBox>
              {' '}
              <LeftSideImgContent>
                <Img src={item.cover_img} />
              </LeftSideImgContent>
              <RightSideImgContent>
                <SmallImg src={item?.cover_img} />
                <SmallImg src={item.cover_img} />
                <SmallImg src={item.cover_img} />
              </RightSideImgContent>
            </ImgBox>
            <StoryHeading>{item?.book_name}</StoryHeading>
            <AlignRatingAndFantasySection>
              <RatingAndFantasySection>
                {item?.category?.map((category, index) => (
                  <Fantasy key={category?.id}>{category?.name}</Fantasy>
                ))}

                <Rating>{item?.rating?.rate__avg}</Rating>
              </RatingAndFantasySection>
            </AlignRatingAndFantasySection>
          </SubRoot>
        </Link>
      </PotentialStarletContentCard>
    </>
  )
}

export default ContentCard

const SubRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  &:hover {
    border-color: #582ac5;
    transform: scale(1.01, 1.01);
    transition-duration: 0.7s;
  }
  width: 100%;
  gap: 5px;
`

{
  /* <Root key={item.id}>
<ImgBox>
  <Img
    src={item.cover_img}
    width="full"
    style={{
      position: 'absolute',
      objectFit: 'cover',
      top: '0',
      left: '0',
    }}
  />
  <AddIcon>
    <IoIosAddCircle size={26} color="#069CF6" />
  </AddIcon>
</ImgBox>
<StoryHeading>{item.book_name}</StoryHeading>
<RatingAndFantasySection>
  {item.category.map(category => (
    <>
      <Fantasy>{category.name}</Fantasy>
      <Rating>{category.id}</Rating>
    </>
  ))}
</RatingAndFantasySection>
</Root> */
}
