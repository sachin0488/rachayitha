import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { ButtonBase, Typography } from '@mui/material'

import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded'
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined'

const ChapterBar = ({ chapterId, chapterSequence, chapterTitle, isPaid, isLocked, isAvailableInSubscription, reload, handleClose }) => {
  const { query } = useRouter()

  const handleClick = useCallback(async () => {
    setTimeout(() => {
      handleClose()
    }, 500)
    await reload({ chapterId })
  }, [chapterId, handleClose, reload])

  return (
    <Link href={`/poem/${query.poemId}/read/${chapterId}`}>
      <StyledA onClick={handleClick}>
        <Root>
          <ChapterText variant="subtitle1" noWrap>
            Chapter {chapterSequence}: {chapterTitle}
          </ChapterText>
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
  :nth-of-type(odd) > * {
    color: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) => theme.palette.primary.main}10;
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
  text-align: left;
  @media (max-width: 450px) {
    width: 100%;
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
