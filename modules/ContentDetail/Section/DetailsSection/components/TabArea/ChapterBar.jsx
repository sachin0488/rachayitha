import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { ButtonBase, Tooltip, Typography } from '@mui/material'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded'
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined'
import { useTranslation } from 'react-i18next'

const ChapterBar = ({ chapterId, chapterSequence, chapterTitle, isPaid, isLocked, chapterSlug, contentId, slug, contentType }) => {
  const { query } = useRouter()
  const { t } = useTranslation()

  return (
    <Link href={`/${contentType}/${contentId}/${slug}/read/${chapterId}/${chapterSlug}#chapter-${chapterId}`}>
      <StyledA>
        <Root>
          <Tooltip disableInteractive title={chapterTitle}>
            <ChapterText variant="subtitle1" noWrap>
              <strong>{t('chapter_bar_chapter')} {chapterSequence}:</strong>
              <span> </span>
              {chapterTitle}
            </ChapterText>
          </Tooltip>
          <InfoList>
            {/* {isAvailableInSubscription && <SubscriptionChip />} */}
            {isPaid && <PaidChip />}
            {isLocked ? <LockChip /> : <UnlockChip />}
          </InfoList>
        </Root>
      </StyledA>
    </Link>
  )
}

const StyledA = styled.a`
  cursor: pointer;
  strong {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
  :nth-of-type(odd) > * {
    color: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) => theme.palette.primary.main}10;
    strong {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`

const Root = styled(ButtonBase)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 9px;
  font-weight: 500;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.secondary.main};
  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`

const ChapterText = styled(Typography)`
  font-family: 'Noto Sans', sans-serif;
  text-align: left;
  @media (max-width: 450px) {
    width: 100%;
  }
  letter-spacing: 0.01px;
  strong {
    font-weight: 550;
    letter-spacing: 0.04px;
  }
  span {
    letter-spacing: 5px;
  }
  max-width: 95%;
  @media (max-width: 800px) {
    max-width: initial;
  }
`

const InfoList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
`

const PaidChip = styled(PaidRoundedIcon)`
  color: ${({ theme }) => theme.palette.primary.main}d5;
`

const LockChip = styled(HttpsOutlinedIcon)`
  color: ${({ theme }) => theme.palette.primary.main}d5;
`

const UnlockChip = styled(LockOpenRoundedIcon)`
  color: ${({ theme }) => theme.palette.primary.main}55;
`

const SubscriptionChip = styled(CardMembershipOutlinedIcon)`
  color: ${({ theme }) => theme.palette.primary.main}d5;
`

export default ChapterBar
