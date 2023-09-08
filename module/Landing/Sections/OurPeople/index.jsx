import styled from '@emotion/styled'
// import moment from 'moment/moment'
// import { useEffect } from 'react'
// import { FormProvider, useForm } from 'react-hook-form'
import {
  Typography,
  useMediaQuery,
  // useMediaQuery
} from '@mui/material'

// import CarouselList from './components/CarouselList'
// import ContentListSection from './components/ContentListSection'
// import SelectSelectedTime from './components/SelectSelectedTime'

// import { useTopCollectionService } from 'Container/Landing/services/TopCollection.service'
// import Carousel from './Carousel'

// const collectionTimeList = [
//   {
//     label: 'Last week',
//     value: moment().subtract(7, 'days').format('YYYY-MM-DD'),
//   },
//   {
//     label: 'Last month',
//     value: moment().subtract(30, 'days').format('YYYY-MM-DD'),
//   },
//   {
//     label: 'Last year',
//     value: moment().subtract(365, 'days').format('YYYY-MM-DD'),
//   },
// ]

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

const OurPeople = () => {
  const isTabletXSM = useMediaQuery('(min-width:930px)')
  const isTabletXSS = useMediaQuery('(min-width:850px)')
  //   const methods = useForm({
  //     defaultValues: {
  //       selectedTime: collectionTimeList[0].value,
  //     },
  //   })

  //   const selectedTime = methods.watch('selectedTime')

  //   const { data, isLoading, refetch } = useTopCollectionService({
  //     startDate: selectedTime,
  //     endDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
  //   })

  //   const List = [
  //     <ContentListSection key={1} contentName="Book" contentList={data?.books} isLoading={isLoading} />,
  //     <ContentListSection key={2} contentName="Poems" contentList={data?.poems} isLoading={isLoading} />,
  //     // <ContentListSection key={3} contentName="Shorts" contentList={data?.shorts} />,
  //   ]

  //   useEffect(() => {
  //     refetch()
  //   }, [selectedTime, refetch])

  return (
    <>
      <Root>
        <Main>
          <HeadingBox>
            <Heading>Our Founders</Heading>
          </HeadingBox>
          <Body>
            <Image className="right" src="/people/princ.jpg" alt="" />
            <TextSection>
              <Typography color="secondary" variant="h6">
                {`Our Chairman`}
              </Typography>
              <Typography color="secondary" variant="subtitle2">
                {`St. Xavier's School`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" textAlign="justify">
                {`At St. Xavier's School, we are making a sincere effort to provide the students at holistic educational experience. St. Xavier's School and it is indeed, a temple of knowledge. While we establish the foundation of your child's learning and ascertain his throuh development to enhance his present, we also undertake to prepare him for the highly competitive arena or further studies for his bright future.`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" textAlign="justify">
                {`It would not be an exaggeration to state, that we are among the first in town, to provide detailed CAREER BASED STUDIES in our school, which is being demanded by peolpe the world over. We would venture to take the complete burden of the responsibilities of your ward, on our eager shoulders and execute it to our best capabilities, with all the essential resources. We have struck the right cord to enable your child to meet any kinds of challenges in the competitive world`}
              </Typography>
              <Typography color="secondary" variant="body2" fontWeight={500}>
                {`Cordially`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" fontWeight={600}>
                {`Mr.Rakesh Kumar`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" fontWeight={300}>
                {`Chairman St. Xavier’s School`}
              </Typography>
            </TextSection>
          </Body>
        </Main>
      </Root>
      <Root>
        <Main>
          {/* <HeadingBox>
            <Heading>Campus</Heading>
          </HeadingBox> */}
          <Body>
            <Image className="right" src="/people/principal.jpg" alt="" />
            <TextSection>
              <Typography color="secondary" variant="h6">
                {`From The Principal's Desk`}
              </Typography>
              <Typography color="secondary" variant="subtitle2">
                {`Dear ,`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" textAlign="justify">
                {`In this era of competition it has become very difficult for a student to succeed. Through it sounds challenging but not impossible, all they need is a right guidance and appropriate education. some times even an intelligent student incapable of achieving the goal.`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" textAlign="justify">
                {`Now parents are not able to devote time to their children's upliftment and studies. Apart from school parents take help of tuition and coachings which is very time consuming and expensive.`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" textAlign="justify">
                {`All this has created the need for a self sufficient school which can give them a proper education and show them a right path so that it can help them in the overall development, so that they can get success in today's competitive world and stand different from the rest.`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" textAlign="justify">
                {`All this has created the need for a self sufficient school which can give them a proper education and show them a right path so that it can help them in the overall development, so that they can get success in today's competitive world and stand different from the rest.`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" fontWeight={600}>
                {`Dr. Vandana Tiwari`}
              </Typography>
              <Typography color="secondary" variant="subtitle1" fontWeight={300}>
                {`Principal, St. Xavier's School`}
              </Typography>
            </TextSection>
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
  align-items: center;
  gap: 20px;
  display: flex;

  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff59;
  box-shadow: 1px 3px 38px 1px #0f012f16;
  @media (max-width: 850px) {
    flex-direction: column;
  }
  overflow: hidden;
  @media (max-width: 1100px) {
    overflow: initial;
    padding: 1.25rem;
  }
  @media (max-width: 950px) {
    overflow: initial;
    padding: 1.25rem;
    flex-direction: column;
  }
  @media (max-width: 530px) {
    padding: 0.9rem;
  }
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: auto;
  max-height: 520px;
  @media (max-width: 1100px) {
    border-radius: 10px;
    height: auto;
    width: auto;
  }
  @media (max-width: 580px) {
    border-radius: 10px;
    height: auto;
    width: 100%;
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

const TextSection = styled.div`
  padding: 1.25rem;
  padding-left: 0.25rem;
`

export default OurPeople
