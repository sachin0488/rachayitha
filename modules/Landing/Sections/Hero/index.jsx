import styled from '@emotion/styled'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

import { useMediaQuery } from '@mui/material'

const Hero = () => {
  const isTabletXSM = useMediaQuery('(min-width:900px)')

  return (
    <Root>
      <Main>
        <LeftSection />
        {/* {isTabletXSM && <RightSection />} */}
        <RightSection />
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
  /* overflow: hidden; */
  height: 110vh;
  margin-bottom: -10vh;
  min-height: 500px;
  @media (max-width: 900px) {
    height: fit-content;
    margin-bottom: 60px;
    margin-bottom: 200px;
    /* overflow: ; */
  }
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  justify-content: space-between;
  @media (max-width: 1310px) {
    max-width: 100%;
  }
  margin-top: 70px;
  height: calc(100vh - 70px);
  max-height: 1090px;
  @media (max-width: 900px) {
    /* flex-direction: column-reverse; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`

export default Hero
