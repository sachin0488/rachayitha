import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'

export const GenreButtonListWrapper = styled(Box)`
  width: 100%;
  height: 200px;
  display: flex;
  gap: 7px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const GenreButtonListMobileWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 18px;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const GenreButtonsMobile = styled(Button)`
  font-weight: 500;
  font-size: 1rem;
  padding: 5px 13px;
  color: #000000cb;
  border-radius: 8px;
  transition: 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  width: 120px;
  justify-content: start;
  width: 100%;

  &.genre {
    background: ${({ theme }) => theme.palette.primary.main}1a;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}1a;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 7px;
  }
  &.selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
