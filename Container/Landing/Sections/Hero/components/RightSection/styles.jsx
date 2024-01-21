import styled from '@emotion/styled'

export const ImageRow = styled.div`
  flex-direction: column;
  gap: 15px;
  width: 215px;
  &:nth-of-type(even) {
    margin-bottom: -175px;
  }

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-height: 874px) {
    width: 195px;
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
  border-radius: 10px;
  object-fit: cover;
`
