import React from 'react'
import styled from '@emotion/styled'

function BGsvg({ children }) {
  return (
    <Root>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Root>
  )
}

const Root = styled.div`
  background-image: url('./Vector.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  min-height: 120vh;
  height: fit-content;
  position: relative;
  overflow-x: hidden;
  scrollbar-width: none;
  padding-bottom: 20px;
`

const RightTop = styled.div`
  position: absolute;
  top: 5%;
  right: 0;
  img {
    width: 400px;
  }
`

const ChildrenWrapper = styled.div`
  position: relative;
  padding: 20px;
  margin-top: 5%;
  width: 100%;
  box-sizing: border-box;
`

export default BGsvg
