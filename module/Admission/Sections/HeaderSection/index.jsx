import styled from '@emotion/styled'

import { Typography, useMediaQuery } from '@mui/material'

const HeaderSection = () => {
  return (
    <>
      <Root>
        <Main>
          <HeadingBox>
            <Heading>{`Welcome to St. Xavier's School`}</Heading>
          </HeadingBox>
          <Body>
            <Typography color="secondary" variant="subtitle1" textAlign="justify">
              {`St. Xavier's School is a relatively new name in the city of Gorakhpur, but has its roots embedded in its
              innovative associations with superior quality education. The brainchild of the Chairman Mr. Rakesh Kumar,
              this novel idea traces its inception to the year 2008, brought about by the fundamental need for the
              introduction of an idyllic system of knowledge, to tap the potential of the budding scholars of Gorakhpur.`}
            </Typography>

            <Typography color="secondary" variant="subtitle1" textAlign="justify">
              {`Though in the recent years, there ha sbeen a sudden influx of schools of various calibers in our town, but
              their efficacy can be gauded by the simultaneous upsurge in the number of coaching institute, mushrooming
              in every nook and corner of Gorakhpur. The parents till now had little choice, but to bear the double
              their wards on the path of success. However, with the establishment of ST. XAVIER'S SCHOOL, we assure you
              an education system that is parent-parent- friendly and result oriented.`}{' '}
            </Typography>

            <Typography color="secondary" variant="subtitle1" textAlign="justify">
              {`Through our various features, special programmes and learning slabs, enumerated in the following pages, it
              would be easy to visualize our dream of giving the world, well nurtured and taught individuals, who shall
              create landmarks in whatever field they opt. for.`}
            </Typography>
          </Body>
        </Main>
      </Root>
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
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff59;
  padding: 1.25rem;
  margin-top: 2rem;
  box-shadow: 1px 3px 38px 1px #0f012f16;
  border-radius: 12px;
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
  justify-content: center;
`

const Heading = styled(Typography)`
  text-align: center;
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
