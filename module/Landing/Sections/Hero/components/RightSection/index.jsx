import styled from '@emotion/styled'
import { ImageRow, StyledImage } from './styles'

const RightSection = () => {
  const RowList = [
    ['/temp/IMG_1.jpg', '/temp/IMG_2.jpg', '/temp/IMG_3.jpg'],
    ['/temp/IMG_4.jpg', '/temp/IMG_5.jpg', '/temp/IMG_6.jpg'],
    // ['/temp/IMG_1.png', '/temp/IMG_2.jpeg', ],
  ]

  return (
    <Root>
      {RowList?.map((ImageList, index) => (
        <ImageRow key={index} sx={{ margin: '0px 0px -131px 0px' }}>
          {ImageList?.map((imgSrc, index) => (
            <StyledImage key={index} src={imgSrc} width="218px" height="253px" />
          ))}
        </ImageRow>
      ))}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 50%;
  @media (max-width: 1310px) {
    width: 40%;
  }
  margin-right: 15px;
  margin-left: 15px;
  @media (max-width: 1169px) {
  }
  margin-top: -40px;
  @media (max-height: 1200px) {
    margin-top: -100px;
  }
  @media (max-height: 1140px) {
    margin-top: -200px;
  }
  @media (max-height: 1055px) {
    margin-top: -300px;
  }
  @media (max-height: 954px) {
    /* margin-top: -400px; */
  }

  @media (max-width: 900px) {
    /* margin-top: -160px; */
    width: 60%;
    margin-bottom: 200px;
  }
  @media (max-width: 730px) {
    /* margin-top: -160px; */
    margin-top: -300px;
    width: 80%;
  }
  @media (max-height: 800px) {
    margin-top: -250px;
  }
  @media (max-height: 750px) {
    margin-top: -150px;
  }
  @media (max-height: 650px) {
    margin-top: -50px;
  }
  @media (max-height: 650px) {
    margin-top: 0px;
  }
  @media (max-width: 540px) {
    width: calc(100% - 45px);
  }
`

export default RightSection
