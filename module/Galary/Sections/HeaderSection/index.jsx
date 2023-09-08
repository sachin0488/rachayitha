import styled from '@emotion/styled'

import { Typography, useMediaQuery } from '@mui/material'

const HeaderSection = ({ text }) => {
  return (
    <>
      <Root>
        <Main>
          <HeadingBox>
            <Heading>{text}</Heading> <Line />
          </HeadingBox>
        </Main>
      </Root>
    </>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  padding-top: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main}06;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main}30;
`
const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.secondary.main}30;
  margin-left: 10px;
`
const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  gap: 10px;
  overflow: hidden;
`

const HeadingBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  @media (max-width: 350px) {
    font-size: 25px;
  }
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: capitalize;
`

const CollectionList = styled.div`
  width: 100%;
  height: calc(100% - 44px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export default HeaderSection
