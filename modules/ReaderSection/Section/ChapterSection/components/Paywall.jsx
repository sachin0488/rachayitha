import { Button, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import InfoModal from 'components/StyledModal/InfoModal'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'modules/Payment/services/InternalPurchase.service'
import styled from '@emotion/styled'
import { ContentType } from '../../../constants/common.constants'
import { useTranslation } from 'react-i18next'

const Paywall = ({ coinRequired, chapterId, contentId, contentType, isAvailableInSubscription, isPaid, chapterTitle, chapterSequence }) => {
  const { t } = useTranslation();
  const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false)
  const { mutate, isLoading, isError, isSuccess } = useInternalPurchaseService()

  const handlePayClick = useCallback(() => {
    if (ContentType.BOOK === contentType) {
      mutate({
        amount: coinRequired,
        bookId: contentId,
        chapterId: chapterId,
        orderType: InternalPurchaseOrderType.BOOK_CHAPTER,
      })
    }
    if (ContentType.POEM === contentType) {
      mutate({
        amount: coinRequired,
        poemId: contentId,
        chapterId: chapterId,
        orderType: InternalPurchaseOrderType.POEM_CHAPTER,
      })
    }
  }, [contentType, mutate, coinRequired, contentId, chapterId])

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
      <Typography variant="h5" fontWeight={500} marginBottom={1} component="div" color="secondary" textAlign="center">
        {t('thisChapterIsLocked')}
      </Typography>
      {isAvailableInSubscription && isPaid ? (
        <Typography variant="subtitle2" component="div" color="secondary" textAlign="center" marginTop={-0.2} marginBottom={0.8}>
          {t('youCanUnlockThisChapterByPurchasingOurSubscriptionOrYouCanBuyThisChapterIndividuallyIn')} {coinRequired} {t('coins')}
        </Typography>
      ) : isAvailableInSubscription ? (
        <Typography variant="subtitle2" component="div" color="secondary" textAlign="center" marginTop={-0.2} marginBottom={0.8}>
          {t('youCanUnlockThisChapterByPurchasingOurSubscription')}
        </Typography>
      ) : (
        <Typography variant="subtitle2" component="div" color="secondary" textAlign="center" marginTop={-0.2} marginBottom={0.8}>
          {t('youCanBuyThisChapterIndividuallyIn')} {coinRequired} {t('coins')}
        </Typography>
      )}
      <PaymentButtons>
        {isAvailableInSubscription && (
          <Button variant="contained" disableElevation color="primary" sx={{ marginTop: 2 }}>
            {t('subscribe')}
          </Button>
        )}
        {isPaid && (
          <StyledButton
            disableElevation
            variant="contained"
            endIcon={<ShoppingCartCheckoutRoundedIcon />}
            onClick={() => setPurchaseModalOpen(true)}
            sx={{ marginTop: 2 }}>
            {t('purchaseIndividually')} <span className="price">{t('for')} {coinRequired} {t('coins')}</span>
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
  border-radius: 13px;
  padding: 23px 10px 20px;
  margin-top: auto;
  margin-bottom: auto;
  width: 70%;
  align-self: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  box-shadow: 0px 0px 50px 10px ${({ theme }) => theme.palette.primary.main}17;
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
