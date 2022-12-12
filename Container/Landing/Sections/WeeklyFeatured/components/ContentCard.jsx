import styled from '@emotion/styled'
import { Button, IconButton, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import { mobileM, tablet } from 'styles/mediaQuery/breakPoints'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'
import { cloudinary } from '../../NewArrivalsCards/components/ContentCard'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'
import Link from 'next/link'

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)

  return (
    <Link href={isLoggedIn ? `/book/${item.id}` : `/login`}>
      <Root key={item.id}>
        {isLoggedIn ? (
          <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
            <AddOutlinedIcon />
          </AddIcon>
        ) : (
          <></>
        )}

        <ImgBox>
          <Img
            src={cloudinary}
            width="full"
            style={{
              position: 'absolute',
              objectFit: 'cover',
              top: '0',
              left: '0',
            }}
          />
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
      </Root>
    </Link>
  )
}

export default ContentCard

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  &:hover {
    border-color: #582ac5;
    transform: scale(1.01, 1.01);
    transition-duration: 0.7s;
  }

  gap: 3px;
  padding: 7px 5px;
  width: 138px;
  height: 193px;
  @media ${mobileM} {
    width: 200px;
    height: 280px;
    gap: 10px;
    padding: 16px 14px;
  }
  @media ${tablet} {
    width: 250px;
    height: 349px;
  }
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid #ffffff;
`

const RatingAndFantasySection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${mobileM} {
    gap: 80px;
  }
  align-items: flex-end;
  padding: 0px 5px 0px 5px;
`

const Fantasy = styled.div`
  font-weight: 400;
  font-size: 7.77468px;
  line-height: 9px;
  @media ${mobileM} {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  color: #8d8e99;
`

const Rating = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  @media ${mobileM} {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`

const StoryHeading = styled(Typography)`
  font-weight: 600;
  padding: 5px 5px;
  color: black;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-weight: 600;
  font-size: 12.2174px;
  line-height: 14px;
  height: 28px;
  @media ${mobileM} {
    font-size: 16px;
    line-height: 21px;
    height: 60px;
    padding: 16px 5px;
  }
  @media ${tablet} {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    height: 63px;
  }
`

const ImgBox = styled.div`
  border-radius: 10px;
  width: 123px;
  height: 121px;

  @media ${mobileM} {
    width: 160px;
    height: 170px;
  }
  @media ${tablet} {
    width: 221px;
    height: 219px;
  }
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const AddIcon = styled(Button)`
  /* background: #ffffff; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 35px;
  min-height: 35px;
  /* 
  height: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;
`
