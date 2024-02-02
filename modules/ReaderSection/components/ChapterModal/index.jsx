import styled from '@emotion/styled'

import { Typography } from '@mui/material'
import { useCallback } from 'react'
import ChapterBar from './ChapterBar'
import { StyledModal } from 'components/StyledModal'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded'
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined'

const ChapterModal = ({ open, setOpen, chapterList, reload, contentType, contentId, slug }) => {
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={400}>
      <Main>
        <Title variant="h4" component="div" color="secondary">
          Chapter Index
        </Title>
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
              contentType={contentType}
              contentId={contentId}
              slug={slug}
              chapterId={chapter.chapterId}
              chapterSequence={chapter.chapterSequence}
              chapterSlug={chapter.chapterSlug}
              chapterTitle={chapter.chapterTitle}
              isPaid={chapter.isPaid}
              isLocked={chapter.isLocked}
              isAvailableInSubscription={chapter.isAvailableInSubscription}
              reload={reload}
              handleClose={handleClose}
            />
          ))}
        </ChapterList>
      </Main>
    </Root>
  )
}

const Root = styled(StyledModal)`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 520px) {
    padding-inline: 10px;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const Title = styled(Typography)`
  font-weight: 600;
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

export default ChapterModal
