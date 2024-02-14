import styled from '@emotion/styled'
import { Skeleton } from '@mui/material'

export const TabsRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: min-content min-content min-content;
    grid-gap: 13px;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 13px;
  }

  @media (max-width: 415px) {
    display: grid;
    grid-template-columns: calc(50% - 7.5px) calc(50% - 7.5px);
    grid-gap: 13px;
    width: 100%;
  }
  &.disabled-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const StyledSkeleton = styled(Skeleton)`
  height: 238px;
  max-width: 158px;
  width: 158px;

  @media (max-width: 730px) {
    width: 100%;
    max-width: 100%;
    height: 238px;
  }
`

export const NotAvailableBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 300px;
  max-width: 240px;
  align-self: center;
`

export const ContentListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 415px) {
    justify-content: flex-end;
    margin-left: auto;
  }
`
