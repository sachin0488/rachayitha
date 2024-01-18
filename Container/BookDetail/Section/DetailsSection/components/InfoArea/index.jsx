import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import StyledChip from './StyledChip'
import { Button, Tooltip, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import ToggleToLibraryButton from './ToggleToLibraryButton'
import MoreOptions from './MoreOptions'
import RatingBar from './RatingBar'
import LikeButton from './LikeButton'

import { useBookDetailsService } from 'Container/BookDetail/services/BookDetails.service'

import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Link from 'next/link'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import InfoModal from 'Components/StyledModal/InfoModal'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'Container/Payment/services/InternalPurchase.service'

const InfoArea = () => {
  const { query } = useRouter()
  const { Data } = useBookDetailsService({ bookId: query?.bookId })
  const { mutate, isLoading, isError, isSuccess } = useInternalPurchaseService()
  const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false)

  const handlePayClick = useCallback(
    ({ amount, id }) =>
      () => {
        mutate({
          amount: amount,
          bookId: id,
          orderType: InternalPurchaseOrderType.BOOK,
        })
      },
    [mutate],
  )

  useEffect(() => {
    if (isSuccess || isError) {
      setPurchaseModalOpen(false)
    }
  }, [isSuccess, isError])

  return (
    <Root>
      <InfoModal
        messageNotice={`Exciting choice! Just to confirm, purchasing ${Data?.bookName} will deduct ${Data?.price} Coins from your account!`}
        open={isPurchaseModalOpen}
        setOpen={setPurchaseModalOpen}
        isLoading={isLoading}
        buttonText={'Purchase'}
        onClickOk={handlePayClick({ amount: Data?.price, id: Data?.bookId })}
      />
      <BookName variant="h3" component="div">
        {Data?.bookName}
      </BookName>

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
        <Link href={`/book/${query?.bookId}/read/${Data?.chapter?.[0]?.id}`}>
          <a>
            <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Read
            </Button>
          </a>
        </Link>

        {Data?.price ? (
          <>
            {Data?.isPurchased ? (
              <Tooltip title="You have purchased this book">
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
        <ToggleToLibraryButton bookId={query?.bookId} libraryAdded={Data?.libraryAdded} />
        <LikeButton bookId={query?.bookId} likeCount={Data?.likeCount} isLiked={Data?.isLiked} />
        <MoreOptions />
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

const BookName = styled(Typography)`
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
    line-height: 1;
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
  gap: 10px;
  margin-top: 5px;
`

export default InfoArea
