import styled from '@emotion/styled'
import { Button, ButtonBase, Typography } from '@mui/material'

export const Root = styled.div`
  position: relative;
  @media (min-width: 365px) {
    padding: 8px;
    box-shadow: none;
    border-radius: 16px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.palette.primary.main}18;
    :hover {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
      transform: scale(1.02);
    }
    max-width: 175px;
  }

  @media (max-width: 400px) {
    max-width: initial;
  }
`

export const StyledButton = styled(ButtonBase)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 13px;
  background-color: transparent;
  @media (max-width: 365px) {
    border-radius: 11px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  border-radius: 10px;
  aspect-ratio: 12/16;
`

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 4px;
`

export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 22px);
`

export const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleName = styled(Typography)`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`

export const CategoryName = styled(Typography)`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
`

export const Rating = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  font-size: 0.9rem;
`

export const StyledCornerButton = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 35px;
  min-height: 35px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 365px) {
    border-top-right-radius: 11px;
    border-bottom-left-radius: 11px;
  }
`
