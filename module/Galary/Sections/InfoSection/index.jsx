import styled from '@emotion/styled'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

import { useMediaQuery } from '@mui/material'

const InfoSection = () => {
  const isTabletXSM = useMediaQuery('(min-width:900px)')

  return (
    <Root>
      <Main>
        <Body>
          <LeftSection />
          <RightSection />
        </Body>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
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

const Body = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`

export default InfoSection
