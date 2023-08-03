import styled from '@emotion/styled'
import { ImageRow, StyledImage } from './styles'

const RightSection = () => {
  const RowList = [
    ['/temp/IMG_1.png', '/temp/IMG_2.jpeg', '/temp/IMG_3.jpg', '/temp/IMG_1.png'],
    ['/temp/IMG_1.png', '/temp/IMG_2.jpeg', '/temp/IMG_3.jpg', '/temp/IMG_1.png'],
    ['/temp/IMG_1.png', '/temp/IMG_2.jpeg', '/temp/IMG_3.jpg', '/temp/IMG_1.png'],
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
    margin-top: -400px;
  }
  @media (max-height: 874px) {
    margin-top: -500px;
  }
  @media (max-height: 670px) {
    margin-top: -600px;
  }
  @media (max-height: 609px) {
    margin-top: -650px;
  }
  @media (max-height: 563px) {
    margin-top: -700px;
  }
  @media (max-height: 524px) {
    margin-top: -750px;
  }
`

export default RightSection
