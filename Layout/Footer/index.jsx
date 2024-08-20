import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import LogoBox from './components/LogoBox'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation("common")

  return (
    <Root>
      <Main>
        <Section>
          <Heading variant="h5" component="div">
            {t('discover')}
          </Heading>
          <Link href="/">
            <a>
              <LinkButton>{t('home')}</LinkButton>
            </a>
          </Link>
          <Link href="/explore?content_type=book&category=0&sort_by=Hot">
            <a>
              <LinkButton>{t('explore')}</LinkButton>
            </a>
          </Link>
          <Link href="/ranking?content_type=book&category=0">
            <a>
              <LinkButton>{t('ranking')}</LinkButton>
            </a>
          </Link>
        </Section>
        <Divider />
        <Section>
          <Heading variant="h5" component="div">
            {t('create')}
          </Heading>
          <a href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}workspace/novel`} target="_blank" rel="noreferrer">
            <LinkButton>{t('Book')}</LinkButton>
          </a>
          <a href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}workspace/poem`} target="_blank" rel="noreferrer">
            <LinkButton>{t('Poem')}</LinkButton>
          </a>
        </Section>
        <Divider />
        <Section>
          <Heading variant="h5" component="div">
            {t('about_us')}
          </Heading>
          <Link href="/privacy-policy">
            <a>
              <LinkButton>{t('privacy_policy')}</LinkButton>
            </a>
          </Link>
          <Link href="/terms-and-conditions">
            <a>
              <LinkButton>{t('terms_and_conditions')}</LinkButton>
            </a>
          </Link>
        </Section>
        <Extra />
        <Divider />
        <Section>
          <Heading variant="h5" component="div">
            {t('follow_us')}
          </Heading>
          <SocialLinks>
            <a href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target="_blank" rel="noreferrer">
              <BsFacebook size={35} color="#673CCB" />
            </a>
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK} target="_blank" rel="noreferrer">
              <FaInstagramSquare size={35} color="#673CCB" />
            </a>
            <a href={process.env.NEXT_PUBLIC_TWITTER_LINK} target="_blank" rel="noreferrer">
              <AiFillTwitterCircle size={37} color="#673CCB" />
            </a>
          </SocialLinks>

          <ColumnSection>
            <Heading variant="h6" component="div">
              {t('contact_us')}
            </Heading>
            <Description variant="subtitle1">
              <a href="mailto:support@rachayitha.com">{t('email')}</a>
            </Description>
          </ColumnSection>
          <ColumnSection>
            <LogoBox />
            <Description variant="subtitle2">{t('description')}</Description>
          </ColumnSection>
        </Section>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  background: ${({ theme }) => theme.palette.primary.main}18;
  display: flex;
  padding: 30px 20px;
  justify-content: center;
  margin-top: auto;
`

const Main = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: 80px 80px 160px 260px;
  justify-content: space-between;

  @media (min-width: 1080px) {
    justify-content: start;
    grid-gap: 80px;
    grid-template-columns: 80px 80px 160px 1fr 360px;
  }

  max-width: 1620px;
  width: 100%;
  padding-inline: 50px;
  @media (max-width: 1000px) {
    padding-inline: 30px;
  }
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    padding-inline: 15px;
  }
  @media (max-width: 435px) {
    padding-inline: 2px;
  }
  @media (max-width: 405px) {
    padding-inline: 0px;
  }
`

const Extra = styled.div`
  display: none;
  @media (min-width: 1080px) {
    display: block;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const LinkButton = styled(Button)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px;
  border-radius: 4px;
  padding: 1px 0px 0px;
  line-height: 1;
  margin-block: 6px;
  min-width: auto;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Heading = styled(Typography)`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Description = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main}a5;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`

const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background: ${({ theme }) => theme.palette.secondary.main}17;
  margin-block: 10px;

  @media (min-width: 860px) {
    display: none;
  }
`

const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;
`

export default Footer
