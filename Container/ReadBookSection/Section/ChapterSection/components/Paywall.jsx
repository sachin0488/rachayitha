import { Button, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import InfoModal from 'Components/StyledModal/InfoModal'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'Container/Payment/services/InternalPurchase.service'
import styled from '@emotion/styled'

const Paywall = ({ coinRequired, chapterId, bookId, isAvailableInSubscription, isPaid, chapterTitle, chapterSequence }) => {
  const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false)
  const { mutate, isLoading, isError, isSuccess } = useInternalPurchaseService()

  const handlePayClick = useCallback(() => {
    mutate({
      amount: coinRequired,
      bookId: bookId,
      chapterId: chapterId,
      orderType: InternalPurchaseOrderType.CHAPTER,
    })
  }, [mutate, bookId, chapterId, coinRequired])

  useEffect(() => {
    if (isSuccess || isError) {
      setPurchaseModalOpen(false)
    }
  }, [isSuccess, isError])

  return (
    <Root>
      <InfoModal
        messageNotice={`Do you want to Purchase Chapter ${chapterSequence}: ${chapterTitle}?`}
        open={isPurchaseModalOpen}
        setOpen={setPurchaseModalOpen}
        isLoading={isLoading}
        buttonText={'Purchase'}
        onClickOk={handlePayClick}
      />
      <Typography variant="h5" component="div" color="secondary" fontWeight={600} marginBottom={2} textAlign="center">
        This chapter is locked
      </Typography>
      {isAvailableInSubscription && isPaid ? (
        <Typography variant="body2" component="div" color="secondary" textAlign="center">
          You can unlock this chapter by purchasing our subscription or you can buy this chapter individually in {coinRequired} coins
        </Typography>
      ) : isAvailableInSubscription ? (
        <Typography variant="body2" component="div" color="secondary" textAlign="center">
          You can unlock this chapter by purchasing our subscription.
        </Typography>
      ) : (
        <Typography variant="body2" component="div" color="secondary" textAlign="center">
          You can unlock this chapter by purchasing it individually in {coinRequired} coins
        </Typography>
      )}
      <PaymentButtons>
        {isAvailableInSubscription && (
          <Button variant="contained" disableElevation color="primary" sx={{ marginTop: 2 }}>
            Subscribe
          </Button>
        )}
        {isPaid && (
          <StyledButton
            disableElevation
            variant="contained"
            endIcon={<ShoppingCartCheckoutRoundedIcon />}
            onClick={() => setPurchaseModalOpen(true)}
            sx={{ marginTop: 2 }}>
            Purchase individually <span className="price">for {coinRequired} Coins</span>
          </StyledButton>
        )}
      </PaymentButtons>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  border-radius: 13px;
  padding: 20px 10px;
  margin-top: auto;
  margin-bottom: auto;
  width: 70%;
  align-self: center;
`

const PaymentButtons = styled.div`
  display: flex;
  gap: 10px;
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

export default Paywall
