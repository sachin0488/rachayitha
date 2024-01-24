import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import StyledChip from './StyledChip'
import { Button, Tooltip, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import ToggleToLibraryButton from './ToggleToLibraryButton'
import MoreOptions from './MoreOptions'
import RatingBar from './RatingBar'
import LikeButton from './LikeButton'

import { usePoemDetailsService } from 'Container/PoemDetail/services/PoemDetails.service'

import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Link from 'next/link'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import InfoModal, { InfoModalType } from 'Components/StyledModal/InfoModal'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'Container/Payment/services/InternalPurchase.service'
import { useUserService } from 'Container/Auth/service/User.service'

const InfoArea = () => {
  const { query } = useRouter()
  const { Data } = usePoemDetailsService({ poemId: query?.poemId })
  const { mutate, isLoading, isError, isSuccess, message } = useInternalPurchaseService({
    disableSnackbar: true,
  })
  const { isLoggedIn } = useUserService()
  const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false)
  const [purchaseFeedbackModalType, setPurchaseFeedbackModalType] = useState(InfoModalType.Default)
  const [isPurchaseFeedbackModalOpen, setPurchaseFeedbackModalOpen] = useState(false)

  const handlePayClick = useCallback(
    ({ amount, id }) =>
      () => {
        mutate({
          amount: amount,
          poemId: id,
          orderType: InternalPurchaseOrderType.POEM,
        })
      },
    [mutate],
  )

  useEffect(() => {
    if (isSuccess || isError) {
      setPurchaseModalOpen(false)
    }

    if (isSuccess) {
      setPurchaseFeedbackModalType(InfoModalType.SUCCESS)
      setPurchaseFeedbackModalOpen(true)
    }

    if (isError) {
      setPurchaseFeedbackModalType(InfoModalType.ERROR)
      setPurchaseFeedbackModalOpen(true)
    }
  }, [isSuccess, isError])

  return (
    <Root>
      <InfoModal
        messageNotice={`Exciting choice! Just to confirm, purchasing ${Data?.poemName} will deduct ${Data?.price} Coins from your account!`}
        open={isPurchaseModalOpen}
        setOpen={setPurchaseModalOpen}
        isLoading={isLoading}
        buttonText={'Purchase'}
        onClickOk={handlePayClick({ amount: Data?.price, id: Data?.poemId })}
      />
      <InfoModal
        type={purchaseFeedbackModalType}
        messageNotice={message || ''}
        open={isPurchaseFeedbackModalOpen}
        setOpen={setPurchaseFeedbackModalOpen}
        isLoading={isLoading}
        cancelButtonText={'Close'}
        disableOkButton
      />

      <PoemName variant="h3" component="div">
        {Data?.poemName}
      </PoemName>

      <InfoChipList>
        {Data?.category?.map(({ name, id }) => (
          <StyledChip label={name} key={id} />
        ))}
        <StyledChip label={`${Data?.chapterCount} Chapters`} Icon={CollectionsBookmarkRoundedIcon} />
        <StyledChip label={`${Data?.viewCount} Views`} Icon={RemoveRedEyeRoundedIcon} />
      </InfoChipList>

      <Author color="secondary">
        Author: <b>{Data?.authorName}</b>
      </Author>

      <RatingBar avgRatingValue={Data?.avgRatingValue} totalRatingCount={Data?.totalRatingCount} />

      <ButtonList>
        <Link href={`/poem/${query?.poemId}/${query?.slug}/read/${Data?.chapter?.[0]?.id}`}>
          <a>
            <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Read
            </Button>
          </a>
        </Link>

        {Data?.price ? (
          <>
            {Data?.isPurchased ? (
              <Tooltip title="You have purchased this poem">
                <StyledPurchasedButton disableRipple variant="text" endIcon={<CheckRoundedIcon />} color="success">
                  Purchased
                </StyledPurchasedButton>
              </Tooltip>
            ) : (
              <StyledButton variant="contained" endIcon={<ShoppingCartCheckoutRoundedIcon />} onClick={() => setPurchaseModalOpen(true)}>
                Purchase <span className="price">for {Data?.price} Coins</span>
              </StyledButton>
            )}
          </>
        ) : null}
        {isLoggedIn && <ToggleToLibraryButton poemId={query?.poemId} libraryAdded={Data?.libraryAdded} />}
        <LikeButton disabled={!isLoggedIn} poemId={query?.poemId} likeCount={Data?.likeCount} isLiked={Data?.isLiked} />
        <MoreOptions poemId={query?.poemId} />
      </ButtonList>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 800px) {
    gap: 20px;
  }
`

const PoemName = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const InfoChipList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const Author = styled(Typography)`
  margin-top: 4px;
`

const StyledButton = styled(Button)`
  span.price {
    margin-left: 5px;
    background: #ffffff30;
    line-height: 1.2;
    padding: 4px 5px;
    border-radius: 5px;
    display: flex;
  }
`

const StyledPurchasedButton = styled(Button)`
  background: ${({ theme }) => theme.palette.success.main}10;
  padding-inline: 13px;
  :hover {
    background: ${({ theme }) => theme.palette.success.main}10;
  }
`

const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
`

export default InfoArea
