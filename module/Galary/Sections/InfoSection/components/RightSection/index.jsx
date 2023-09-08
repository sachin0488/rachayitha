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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5125.776330858819!2d83.18387988682666!3d26.752966228604546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4876e38063f4f57d!2sSt%20Xaviers%20School%2CBhitirawat%2CSahjanwa%2CGorakhpur%2CUP!5e1!3m2!1sen!2sin!4v1643452958351!5m2!1sen!2sin"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </Root>
  )
}

const Root = styled.div`
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
  /* border: 1px solid ${({ theme }) => theme.palette.secondary.main}; */
  iframe {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 950px) {
    min-height: 400px;
    margin-top: 50px;
    width: calc(100% - var(--main-side-spacing) * 2);
    align-self: center;
  }
  box-shadow: 1px 3px 38px 2px #0f012f16;
`

export default RightSection
