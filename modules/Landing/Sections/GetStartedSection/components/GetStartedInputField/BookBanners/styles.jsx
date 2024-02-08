import styled from '@emotion/styled'

export const ImageRow = styled.div`
  flex-direction: column;
  gap: 15px;
  width: 215px;
  margin-bottom: -275px;
  &:nth-of-type(even) {
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    /* display: none; */
  }
  @media (max-height: 874px) {
    width: 195px;
  }

  @media (max-height: 740px) {
    overflow: hidden;
  }
  position: relative;
`

export const StyledImage = styled.img`
  height: auto;
  /* aspect-ratio: 9/12; */
  aspect-ratio: 237/285;
  width: 100%;
  overflow: hidden;
  margin-top: 8px;
  box-shadow: 4px 4px 15px 0rem rgb(81 34 192 / 20%);
  border-radius: 18px;
  object-fit: cover;
`
