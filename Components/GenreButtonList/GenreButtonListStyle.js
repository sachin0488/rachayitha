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
  height: 60px;
  display: flex;
  gap: 18px;
  justify-content: start;
  align-items: flex-start;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const GenreButtonsMobile = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  min-width: 90px;
  font-size: 15px;
  line-height: 18px;
  padding: 5px 12px;
  border-radius: 12px;
  border: 1px solid #e7e7e7;
  color: #5624c1;
  background-color: transparent;
  &.genre {
    background-color: #673ccb;
    color: white;
  }

  &.genre:hover {
    background-color: #673ccb;
  }
`
