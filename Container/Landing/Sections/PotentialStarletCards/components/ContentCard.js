import React from 'react'
import { AddIcon } from '../../WeeklyFeatured/components/ContentCard'
import {
  PotentialStarletContent,
  Heading,
  SubWrapper,
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

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)
  return (
    <>
      <Link href={isLoggedIn ? `/book/${item.id}` : `/login`}>
        <PotentialStarletContentCard key={item.id}>
          {isLoggedIn ? (
            <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
              <AddOutlinedIcon />
            </AddIcon>
          ) : (
            <></>
          )}
          <ImgBox>
            {' '}
            <LeftSideImgContent>
              <Img src={item.img_url} />
            </LeftSideImgContent>
            <RightSideImgContent>
              <SmallImg src={item?.img_url} />
              <SmallImg src={item.img_url} />
              <SmallImg src={item.img_url} />
            </RightSideImgContent>
          </ImgBox>
          <StoryHeading>{item?.title}</StoryHeading>
          <AlignRatingAndFantasySection>
            <RatingAndFantasySection>
              <Fantasy>{item?.fantasy}</Fantasy>
              <Rating>{item?.rating}</Rating>
            </RatingAndFantasySection>
          </AlignRatingAndFantasySection>
        </PotentialStarletContentCard>
      </Link>
    </>
  )
}

export default ContentCard

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
