import styled from '@emotion/styled'
import React from 'react'

const index = () => {
  return <></>
}

export default index

const Root = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  height: 110px;
  width: 100%;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1); */
  z-index: 100000;
  padding: 0px 15px;
  @media ${tabletS} {
    padding: 0px 30px;
  }
  @media ${tablet} {
    padding: 0px 50px;
  }
  @media ${laptopS} {
    padding: 0px 50px;
  }
  @media ${laptopM} {
    padding: 0px 70px;
  }
`
const LogoWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  padding: 0 0px;
  align-items: center;
  width: 50%;
  cursor: pointer;
  @media ${tabletS} {
    width: 26%;
    padding: 0 10px;
  }
  @media ${laptopS} {
    width: 17%;
  }
  height: 100%;
  font-size: 40px;
  gap: 14px;
`
