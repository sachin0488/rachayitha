import styled from '@emotion/styled'
import React from 'react'
import ChapterBar from './ChapterBar'
import { Typography } from '@mui/material'

import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded'
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined'

const ChapterListTab = ({ chapterList }) => {
  return (
    <Root>
      <MeaningChipList>
        <MeaningChip>
          <Typography variant="subtitle2" component="div" color="secondary">
            Locked Chapter
          </Typography>
          <LockChip />
        </MeaningChip>
        <MeaningChip>
          <Typography variant="subtitle2" component="div" color="secondary">
            Unlocked Chapter
          </Typography>
          <UnlockChip />
        </MeaningChip>
        <MeaningChip>
          <Typography variant="subtitle2" component="div" color="secondary">
            Paid
          </Typography>
          <PaidChip />
        </MeaningChip>
        {/* <MeaningChip>
          <Typography variant="subtitle2" component="div" color="secondary">
            Available in Subscription
          </Typography>
          <SubscriptionChip />
        </MeaningChip> */}
      </MeaningChipList>
      <ChapterList>
        {chapterList?.map(chapter => (
          <ChapterBar
            key={chapter.chapterId}
            chapterId={chapter.chapterId}
            chapterSequence={chapter.chapterSequence}
            chapterTitle={chapter.chapterTitle}
            isPaid={chapter.isPaid}
            isLocked={chapter.isLocked}
            isAvailableInSubscription={chapter.isAvailableInSubscription}
          />
        ))}
      </ChapterList>
    </Root>
  )
}

const Root = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 800px) {
    gap: 5px;
    max-height: auto;
    overflow: auto;
  }
`
const ChapterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const MeaningChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  padding-block: 5px;
  padding-bottom: 10px;
`

const MeaningChip = styled.div`
  display: flex;
  align-items: center;
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  gap: 5px;
  padding: 3px 7px;
  .MuiSvgIcon-root {
    font-size: 1.2rem;
  }
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

export default ChapterListTab
