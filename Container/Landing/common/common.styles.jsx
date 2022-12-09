import styled from '@emotion/styled'
import React from 'react'

export const mainMaxWidth = 1920

export const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  color: black;
  background: linear-gradient(180deg, rgba(102, 59, 203, 0.1) 0%, rgba(102, 59, 203, 0) 100%);
  --main-max-width: ${mainMaxWidth}px;
  --main-side-spacing: 50px;
  @media (max-width: 1000px) {
    --main-side-spacing: 30px;
  }
  @media (max-width: 375px) {
    --main-side-spacing: 15px;
  }
`
