import styled from '@emotion/styled'

import { Button, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import Section from './components/Section'

const InfoSection = () => {
  const isTabletXSL = useMediaQuery('(min-width:930px)')
  const isTabletXSM = useMediaQuery('(min-width:850px)')
  const isTabletXSS = useMediaQuery('(min-width:1140px)')
  // const [isR, setisR] = useState(second)
  return (
    <>
      {/* <Root>
        <Main>
          <HeadingBox>
            <Heading>Location</Heading>
          </HeadingBox>
          <Body>
            {isTabletXSL && <Image src="/building_structure/IMG_1.jpg" alt="" />}
            <Typography color="secondary" variant="subtitle1" textAlign="justify">
              {!isTabletXSL && <Image src="/building_structure/IMG_1.jpg" alt="" />}
            </Typography>
          </Body>
        </Main>
      </Root> */}
      <Section
        title="Location"
        breakPoint={930}
        imageSrc="/building_structure/IMG_1.jpg"
        position="left"
        text={`We are purposely located in the laps of natural splendor, slightly away from the maddening hustle and bustle of the noisy city. Situated in Gorakhpur. We prove to be of easy access to anybody residing anywhere, within half an hour's drive. The serene ambience will enable concentrated learning and a hassle free management.`}
      />
      <Section
        title="Campus"
        breakPoint={1140}
        imageSrc="/building_structure/IMG_2.jpg"
        position="right"
        text={`The school has the beautiful and serene campus setting free from the pressure of today's life in order to develop in the boys and girls a sense of self assurance and self-reliance. The majestic grandeur of the building is amply supported by aesthetically designed and well maintained gardens and play fields all around. The greenery which abounds on the campus provides a pleasing sight and conducive atmosphere for learning. The school's self- sufficient campus designed is made of bricks, sand stones and marbles to blend seamlessly into surroundings. It's simple yet elegant and beautifully conceived design captures the surrounding environment perfectly.`}
      />
      <Section
        title="School Building"
        breakPoint={1622}
        imageSrc="/building_structure/IMG_3.jpg"
        position="left"
        text={[
          `The magnificent proposed five storied building is architecturally impeccable and spacious, equipped with all the state-of-the-art facilities and departments. The main building is encompassed to any location within the campus and ample parking space for the buses and private vehicles to avoid any commotion.
          The various departments have been so meticulously planned in their location that students waste minimum time in reaching from one block to another. Any time saved is a lot of time gained There are specially designed fields, to provide ample space for all kinds of sporting action and physical fitness regimes, even for all the students together at a time. Each class is extremely spacious, with comfortable seating arrangements, well ventilated and fully lighted, to bring about a conducive atmosphere for learning.
          Spacial domains are allotted for the extra curricular activities, that each student would undertake during his tenure, like the music and dance room, the computer lab, art and craft section, fully equipped library horticulture section, audio-visual lab, fitness center, the swimming pool and much more. The school also has modern and comfortable hostel area, for students Class 1st. upwards, furnished with all the necessities for a homely, yet study inductive environment.`,
        ]}
      />
    </>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
`
const ReadMoreButton = styled(Button)`
  align-self: flex-end;
  margin-left: auto;
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
  align-items: center;
  gap: 20px;
  display: flex;
  padding: 1.25rem;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff59;
  box-shadow: 1px 3px 38px 1px #0f012f16;
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 530px) {
    padding: 0.9rem;
  }
`

const Image = styled.img`
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 10px;
  float: left;
  margin-right: 28px;
  &.right {
    margin-right: 0px;
    margin-left: 20px;
    float: right;
  }
  box-shadow: 2px 2px 30px 0 rgb(0 0 0 / 10%);
  @media (max-width: 850px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    float: initial;
    &.right {
      margin-right: 0px;
      margin-left: 0px;
      float: initial;
    }
  }
`

const HeadingBox = styled.div`
  display: flex;
  gap: 8px;
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

export default InfoSection
