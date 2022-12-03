import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`

export const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const ReturnHomeButton = styled(Button)`
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 17px;
  color: #38e54d;
  background-color: white;
  border: 1px solid #bad1c2;
  &:hover {
    background-color: #f6fbf4;
    color: #1a4d2e;
    border-color: #839aa8;
    transition-duration: 0.7s;
  }
`
export const ParagraphText = styled(Typography)`
  color: #ff3860;
  font-size: 20px;
  font-weight: 500;
`
export const Heading = styled(Typography)`
  color: #ff3860;
  font-size: 47px;
  font-weight: 500;
`
