import styled from '@emotion/styled'
import React from 'react'
import TollOutlinedIcon from '@mui/icons-material/TollOutlined'
import { Button, CircularProgress, Skeleton, Tooltip, Typography, useMediaQuery } from '@mui/material'
import { blue } from '@mui/material/colors'

import { useRouter } from 'next/router'
import { useBookDetailsService } from 'Container/BookDetail/services/BookDetails.service'
import { useCreateVoteService } from 'Container/BookDetail/services/CreateVote.service'
import { useFetchVoteService } from 'Container/BookDetail/services/FetchVote.service'

import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded'
import HowToVoteRoundedIcon from '@mui/icons-material/HowToVoteRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'

const VoteSection = () => {
  const isMobile = useMediaQuery('(max-width: 500px)')
  const { query } = useRouter()
  const { Data, isLoading } = useBookDetailsService({ bookId: query?.bookId })

  const { isFetching, Data: VoteData } = useFetchVoteService({ bookId: query?.bookId })
  const { isLoading: isMutating, mutate } = useCreateVoteService({ bookId: query?.bookId })

  const isAlreadyVoted = VoteData?.isAlreadyVoted
  const totalVotesByUser = VoteData?.voteCount

  if (isLoading || isFetching)
    return (
      <Root>
        <LoadingMain>
          <StyledSkeleton variant="rounded" />
        </LoadingMain>
      </Root>
    )

  return (
    <Root>
      <Main>
        <Field>
          <HowToVoteRoundedIcon color="primary" style={{ fontSize: isMobile ? 34 : 55 }} />
          <Text style={{ fontSize: isMobile && 15 }}>Votes are held every day to rank your favorite Novel</Text>
        </Field>
        <Bottom>
          <InfoSection>
            <Tooltip title="Ranking">
              <VoteInfoField>
                <StarBorderRoundedIcon color="primary" style={{ fontSize: isMobile ? 34 : 55 }} />
                <HighlightedText variant="h6" component="div" color="secondary">
                  #{Data?.bookRank}
                </HighlightedText>
              </VoteInfoField>
            </Tooltip>
            <Tooltip title="Total Votes">
              <VoteInfoField>
                <TollOutlinedIcon sx={{ color: blue[500], fontSize: isMobile ? 34 : 55 }} />
                <HighlightedText variant="h6" component="div" color="secondary">
                  {Data?.totalVote || 0}
                </HighlightedText>
              </VoteInfoField>
            </Tooltip>
          </InfoSection>
          {/* <TollOutlinedIcon sx={{ color: blue[500] }} /> 0 */}
          {isAlreadyVoted && (
            <Tooltip title="Your vote for this Novel">
              <VoteButton
                is_voted={String(isAlreadyVoted)}
                is_mutating={String(isFetching)}
                variant="contained"
                color={isAlreadyVoted ? 'secondary' : 'primary'}>
                {isFetching ? (
                  <CircularProgress size={35} thickness={7} sx={{ color: theme => theme.palette.primary.main }} />
                ) : (
                  <AddTaskRoundedIcon sx={{ fontSize: isMobile ? 28 : 45 }} />
                )}
                {totalVotesByUser}
              </VoteButton>
            </Tooltip>
          )}
          <Tooltip title="Vote This book">
            <AddVoteButton
              disabled={isMutating}
              is_mutating={String(isMutating)}
              variant="contained"
              color={'primary'}
              onClick={mutate}>
              {isMutating ? (
                <CircularProgress size={35} thickness={7} sx={{ color: theme => theme.palette.primary.main }} />
              ) : (
                <KeyboardDoubleArrowUpRoundedIcon sx={{ fontSize: isMobile ? 30 : 45 }} />
              )}
            </AddVoteButton>
          </Tooltip>
        </Bottom>
      </Main>
    </Root>
  )
}

const LoadingMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 20px;
  }
`

const StyledSkeleton = styled(Skeleton)`
  min-height: 103px;
  width: 100%;
  max-width: 100%;
  @media (max-width: 780px) {
    min-height: 153px;
  }
`

const Root = styled.div`
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 780px) {
    margin-top: 10px;
  }
`

const Main = styled.div`
  position: relative;
  padding: 15px;
  box-shadow: 3px 3px 21px 1px rgba(98, 0, 255, 0.1);
  background-image: ${({ theme }) => theme.palette.background.paperImage};
  border-radius: 18px;
  transition: 0.3s ease-in-out;
  border: 2px solid transparent;
  :hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 20px;
  }
`

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1;
  svg {
    font-size: 1.5rem;
  }
  span {
    margin-top: 2px;
    margin-bottom: 2px;
    @media (max-width: 400px) {
      margin-top: 2px;
      margin-bottom: 1px;
    }
  }
`

const Bottom = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 780px) {
    justify-content: space-between;
  }
  @media (max-width: 375px) {
    /* flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const Text = styled(Typography)`
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  letter-spacing: 0.1px;
  line-height: 1.5;
`

const VoteInfoField = styled.div`
  display: flex;
  position: relative;
  padding: 5px 10px 5px 5px;
  border-radius: 15px;
  transition: 0.3s ease-in-out;
  border: 2px solid ${({ theme }) => theme.palette.primary.main}25;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  @media (max-width: 400px) {
    padding: 2.5px 7px 2.5px 2.5px;
    align-items: center;
  }
`

const HighlightedText = styled(Typography)`
  font-weight: 600;
`

const InfoSection = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  @media (max-width: 780px) {
    margin-left: 0px;
    margin-right: auto;
  }
  @media (max-width: 375px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const VoteButton = styled(Button)`
  border-radius: 15px;
  box-shadow: none;
  min-width: 75px;
  /* width: 75px; */
  && {
    color: ${({ is_voted }) => is_voted === 'true' && '#fff'};
    background: ${({ theme, is_voted, is_mutating }) =>
      is_mutating === 'true' ? theme.palette.primary.main + '18' : is_voted === 'true' && theme.palette.secondary.main};
  }
  font-weight: 700;
  font-size: 1.3rem;
  display: flex;
  gap: 6px;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 400px) {
    padding: 2.5px 7px 2.5px 2.5px;
    align-items: center;
  }
`

const AddVoteButton = styled(Button)`
  border-radius: 15px;
  box-shadow: none;
  min-width: 69px;
  width: 69px;
  && {
    color: ${({ is_voted }) => is_voted === 'true' && '#fff'};
    background: ${({ theme, is_voted, is_mutating }) =>
      is_mutating === 'true' ? theme.palette.primary.main + '18' : is_voted === 'true' && theme.palette.secondary.main};
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`

export default VoteSection
