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

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  return (
    <>
      <PotentialStarletContentCard key={item.id}>
        <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
          <AddOutlinedIcon />
        </AddIcon>
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
