import styled from '@emotion/styled'
import { Button, Skeleton, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CreateReviewSection from './components/CreateReviewSection'
import Heading from './components/Heading'
import RatingSection from './components/RatingSection'
import { useRouter } from 'next/router'
import { useContentDetailsService } from 'modules/ContentDetail/services/ContentDetails.service'
import { useUserService } from 'modules/Auth/service/User.service'
import Link from 'next/link'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import { useTranslation } from 'next-i18next'

const ReviewSection = ({ contentType, contentId }) => {
  const { Data, isLoading } = useContentDetailsService({ contentId, contentType })
  const { isLoggedIn } = useUserService()
  const { t } = useTranslation("common")  
  
  const isTablet = useMediaQuery('(max-width: 735px)')

  if (isLoading)
    return (
      <Root>
        <StyledDivider />
        <Body>
          <StyledSkeletonHr variant="rounded" />

          {isTablet && <StyledDivider />}
          <StyledSkeletonCr variant="rounded" />
        </Body>
        <StyledDivider />
      </Root>
    )

  return (
    <Root>
      <StyledDivider />
      <Body>
        <Main>
          <Heading avgRatingValue={Data?.avgRatingValue} totalRatingCount={Data.totalRatingCount} />
          <RatingSection ratingParams={Data?.ratingParams} />
        </Main>
        {isTablet && <StyledDivider />}
        {isLoggedIn ? (
          <CreateReviewSection contentId={contentId} contentType={contentType} />
        ) : (
          <LoginPlaceholder>
            <Typography variant="h6" fontWeight={500} marginBottom={1} component="div" color="secondary" textAlign="center">
              {t('reviewSection.signInPrompt')}
            </Typography>
            <Typography variant="subtitle2" fontWeight={500} component="div" color="secondary.light" textAlign="center">
              {`${t('reviewSection.needAccount')} `}
              <Link href="/create-account">
                <a>
                  <Typography as="span" variant="subtitle2" fontWeight={500} component="div" color="primary" textAlign="center">
                    {t('reviewSection.createAccount')}
                  </Typography>
                </a>
              </Link>
            </Typography>
            <Link href="/login">
              <a>
                <Button disableElevation variant="contained" endIcon={<LoginRoundedIcon />} sx={{ marginTop: 2 }}>
                  {t('reviewSection.signIn')}
                </Button>
              </a>
            </Link>
          </LoginPlaceholder>
        )}
      </Body>
      <StyledDivider />
    </Root>
  )
}

const StyledSkeletonHr = styled(Skeleton)`
  min-height: 184px;
  width: 100%;
  max-width: 100%;
  @media (max-width: 780px) {
    min-height: 178px;
  }
`

const StyledSkeletonCr = styled(Skeleton)`
  min-height: 104px;
  width: 100%;
  max-width: 100%;
  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
  }
`

const LoginPlaceholder = styled.div`
  padding: 25px 15px;
  border-radius: 16px;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;

  @media (max-width: 400px) {
    padding: 25px 15px;
  }

  margin-left: auto;
  margin-right: auto;
`

const Root = styled.div`
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 735px) {
    flex-direction: column;
  }
`
const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 735px) {
    align-items: stretch;
    flex-direction: column;
  }
`

const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.palette.primary.main}18;
  align-self: center;
`

export default ReviewSection
