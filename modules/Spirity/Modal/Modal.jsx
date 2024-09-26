import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useCallback } from 'react'

import StyleModal from './StyleModal'
import { useBookDetailService } from '../service/BookDetail.service'
import Link from 'next/link'


const SearchModal = ({ open, setOpen, id, data }) => {
  const item = data[id-1];
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])
console.log(item);
  const {data: bookData1, isLoading: isLoading1} = useBookDetailService(item?.
    theme_booksample1);
  const {data: bookData2, isLoading: isLoading2} = useBookDetailService(item?.
    theme_booksample2);
  const {data: bookData3, isLoading: isLoading3} = useBookDetailService(item?.
    theme_booksample3);
  
  const combineAllBooks = [bookData1, bookData2, bookData3].filter(book => book !== undefined && book !== null);
   console.log("jdh",combineAllBooks)
  // const paragraphs = item?.ideas?.split('\n') || [];

   const isLoading = isLoading1 || isLoading2 || isLoading3;
  return (
    <>
      <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={550}>
        <Main>
          <ContactList>
            {item && (
              <div>
                <Card >
                  <Details >
                    <h1 className='name'>{item.theme_name}</h1>
                    <p className='phone'>{item.theme_keywords}</p>
                    <p className='phone'>{item.theme_description}</p>
                  </Details>

                </Card>
                <Card>

                  <Description>
                    <h1 className='name'>Ideas</h1>
                    {/* {paragraphs.map((paragraph, index) => (
                      <Paragraph key={index}>{paragraph}</Paragraph>
                    ))} */}
                    <Paragraph>1.{item.theme_example1}</Paragraph>
                    <Paragraph>2.{item.theme_example2}</Paragraph>
                    <Paragraph>3.{item.theme_example3}</Paragraph>
                  </Description>
                </Card>
                {
                  isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <ImageGrid>
  {combineAllBooks.map((image, index) => (
    <Link 
      key={image[0].id}
      href={`/book/${image[0].id}/${image[0].book_name.toLowerCase().split(' ').join('-')}`}
      style={{ textDecoration: 'none' }}
    >
      <ImageContainer>
        <ContactImage src={image[0].cover_img} alt={image[0].book_name} />
        <ImageName>{image[0].book_name}</ImageName>
      </ImageContainer>
    </Link>
  ))}
</ImageGrid>
                  )
                }
              </div>
            )}
          </ContactList>
        </Main>

      </Root>

    </>
  )
}

const Root = styled(StyleModal)`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (min-width: 550px) {
    min-height: 53vh;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled(Typography)`
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
  @media (max-width: 410px) {
    font-size: 1.65rem;
  }
`

const Card = styled.li`
  display: flex;
  align-items: center;
width: 100%;
  border-bottom: 2px solid purple;
`;

const Details = styled.div`
  flex-grow: 1;
 
 

  .name {

    font-size: 2em; /* Increase font size for name */
        margin-bottom: -2px; /* Reduce space between name and phone */

  }

  .phone {
    font-size: 0.9em; /* Decrease font size for phone number */
    color: black;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #6200ea; /* Purple color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  
  &:hover {
    background-color: #3700b3; /* Darker purple on hover */
  }
`;
const ContactImage = styled.img`
   width: 100px;
  height: 130px;
  border-radius: 10%; /* Slight border radius */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border: 2px solid #6200ea; /* Adds a border around the image */
`;
const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 550px;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
const ImageGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8; 
  }
`;

const ImageName = styled.p`
  margin-top: 10px;
  font-size: 0.9em;
  color: black;
  text-align: center; /* Center-align the text */
  width: 100%;
`;
const Description = styled.div`
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  font-size: 1em;
  line-height: 1.5;
  color: black;
`;
export default SearchModal
