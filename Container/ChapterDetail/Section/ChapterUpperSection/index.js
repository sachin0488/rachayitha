import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { cloudinary } from 'Container/Landing/Sections/NewArrivalsCards/components/ContentCard'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import { FaCreativeCommons } from 'react-icons/fa'

const ChapterUpperSection = ({ item, bookName }) => {
  return (
    <>
      <UpperSectionWrapper>
        <ChapterPathReferenceSec>
          <ChapterPathRefText>novel/book/my_vampire_system</ChapterPathRefText>
        </ChapterPathReferenceSec>
        <HeroWrapper>
          <HeroImg src={cloudinary} />
          <BookTitle>{bookName}</BookTitle>
          <AuthorWrapper>
            <AuthorText>Author :</AuthorText>
            <AuthorName>{item?.author_note}</AuthorName>
          </AuthorWrapper>
          <EbookLogo>
            <FaCreativeCommons color="#000000" opacity="0.5" />
            <EbookText>E-Book</EbookText>
          </EbookLogo>

          <HorizontalWrapper>
            <HorizontalRule />
            <ImportContactsIcon color="#9E9E9E" opacity="0.5" />
            <HorizontalRule />
          </HorizontalWrapper>
        </HeroWrapper>
      </UpperSectionWrapper>
    </>
  )
}

export default ChapterUpperSection

const UpperSectionWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`
const ChapterPathReferenceSec = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`
const ChapterPathRefText = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #83848f;
`
const HeroWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 35px;
  flex-direction: column;
  width: 100%;
`
const HeroImg = styled.img`
  object-fit: cover;
  width: 288px;
  height: 389px;
`
export const BookTitle = styled(Typography)`
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.1em;
`
const AuthorWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 4px;
`
const AuthorText = styled(Typography)`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`
const AuthorName = styled(Typography)`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #5427c3;
  padding-bottom: -6px;
  border-bottom: 1px solid transparent;
  &:hover {
    border-color: #5427c3;
  }
`
const EbookLogo = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
const EbookText = styled(Typography)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.76);

  opacity: 0.5;
`
const HorizontalWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const HorizontalRule = styled(Box)`
  border-bottom: 2px solid rgba(189, 189, 189, 0.5);
  width: 45%;
`
