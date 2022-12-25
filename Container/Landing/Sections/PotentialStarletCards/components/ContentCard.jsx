import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { Button, ButtonBase, Typography } from '@mui/material'

import { selectUser } from 'store/slices/global/user.slice'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export const cloudinary = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1666521938/Rectangle_137_mmfqe3.png'

const ContentCard = ({ item }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  const { isLoggedIn } = useSelector(selectUser)

  return (
    <Root>
      <Main>
        {isLoggedIn ? (
          <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(item.id)}>
            <AddOutlinedIcon />
          </AddIcon>
        ) : (
          <></>
        )}
        <ImageSection>
          <Image alt="" src={cloudinary} />
          <SmallImageList>
            <SmallImage alt="" src={cloudinary} />
            <SmallImage alt="" src={cloudinary} />
            <SmallImage alt="" src={cloudinary} />
          </SmallImageList>
        </ImageSection>

        <InfoSection>
          <InfoLeft>
            <TitleName variant="h6">{item?.book_name}</TitleName>
            <CategoryName variant="subtitle2">{item?.category?.map(item => item.name)?.join(', ')}</CategoryName>
          </InfoLeft>
          <InfoRight>
            <Rating variant="subtitle2">{item?.rating?.rate__avg || 'N/A'}</Rating>
          </InfoRight>
        </InfoSection>
      </Main>
      <Link href={isLoggedIn ? `/book/${item.id}` : `/login`}>
        <a>
          <StyledButton color="primary" />
        </a>
      </Link>
    </Root>
  )
}

export default ContentCard

const Root = styled.div`
  position: relative;
  padding: 15px;
  box-shadow: 10px 10px 35px 5px rgba(98, 0, 255, 0.14);
  border-radius: 18px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;
  :hover {
    border: 2px solid #562ac5;
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
`

const StyledButton = styled(ButtonBase)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 18px;
  background-color: transparent;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
`

const Image = styled.img`
  height: 100%;
`

const SmallImageList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 66px;
  gap: 10px;
`

const SmallImage = styled.img`
  height: 100%;
`

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleName = styled(Typography)`
  font-weight: 700;
  font-size: 1.2rem;
`

const CategoryName = styled(Typography)`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.primary.main}bc;
`

const Rating = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  font-size: 1.2rem;
`

const AddIcon = styled(Button)`
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
  display: flex;
  justify-content: center;
  align-items: center;
`
