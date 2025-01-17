import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import StyledChip from './StyledChip'
import { Button, ButtonBase, Tooltip, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import ToggleToLibraryButton from './ToggleToLibraryButton'
import MoreOptions from './MoreOptions'
import RatingBar from './RatingBar'
import LikeButton from './LikeButton'
import { useContentDetailsService } from 'modules/ContentDetail/services/ContentDetails.service'
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Link from 'next/link'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import InfoModal, { InfoModalType } from 'components/StyledModal/InfoModal'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'modules/Payment/services/InternalPurchase.service'
import { useUserService } from 'modules/Auth/service/User.service'
import { ContentType } from 'modules/ReaderSection/constants/common.constants'
import ShareButton from './ShareButton'
import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'

const InfoArea = ({ contentType, contentId, slug }) => {
  const { t } = useTranslation()
  const { Data } = useContentDetailsService({ contentId: contentId, contentType })
  const { mutate, isLoading, isError, isSuccess, message } = useInternalPurchaseService({
    disableSnackbar: true,
  })
  const { isLoggedIn } = useUserService()
  const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false)
  const [purchaseFeedbackModalType, setPurchaseFeedbackModalType] = useState(InfoModalType.Default)
  const [isPurchaseFeedbackModalOpen, setPurchaseFeedbackModalOpen] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handlePayClick = useCallback(
    ({ amount, id }) =>
      () => {
        if (contentType === ContentType.BOOK) {
          mutate({
            amount: amount,
            contentId: id,
            orderType: InternalPurchaseOrderType.BOOK,
          })
        } else if (contentType === ContentType.POEM) {
          mutate({
            amount: amount,
            contentId: id,
            orderType: InternalPurchaseOrderType.POEM,
          })
        }
      },
    [contentType, mutate],
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
        messageNotice={t('purchase_confirmation', { contentName: Data?.contentName, price: Data?.price })}
        open={isPurchaseModalOpen}
        setOpen={setPurchaseModalOpen}
        isLoading={isLoading}
        buttonText={t('purchase')}
        onClickOk={handlePayClick({ amount: Data?.price, id: Data?.contentId })}
      />
      <InfoModal
        type={purchaseFeedbackModalType}
        messageNotice={message || ''}
        open={isPurchaseFeedbackModalOpen}
        setOpen={setPurchaseFeedbackModalOpen}
        isLoading={isLoading}
        cancelButtonText={t('close')}
        disableOkButton
      />

      <ContentName variant="h3" component="h1">
        {Data?.contentName}
      </ContentName>

      <InfoChipList>
        <StyledChip label={Data?.status} contained />
        {Data?.category?.map(({ name, id }) => (
          <StyledChip label={name} key={id} />
        ))}
        <StyledChip label={`${Data?.chapterCount} ${t('chapters')}`} Icon={CollectionsBookmarkRoundedIcon} />
        <StyledChip label={`${Data?.viewCount} ${t('views')}`} Icon={RemoveRedEyeRoundedIcon} />
      </InfoChipList>

      <Tooltip title={t('author_profile')}>
        <Link href={`/author/${Data?.authorId}`}>
          <a>
            <ButtonBase sx={{ width: 'fit-content', borderRadius: '6px', padding: '0px 5px ' }}>
              <Author color="secondary" component="p">
                {t('author')}: <strong>{Data?.authorName}</strong>
              </Author>
            </ButtonBase>
          </a>
        </Link>
      </Tooltip>

      <RatingBar avgRatingValue={Data?.avgRatingValue} totalRatingCount={Data?.totalRatingCount} />

      <ButtonList>
        {Data?.chapter?.[0]?.id ? (
          <Link href={`/${contentType}/${contentId}/${slug}/read/${Data?.chapter?.[0]?.id}/${Data?.chapter?.[0]?.slug}`}>
            <a>
              <Button variant="contained" disableElevation endIcon={<ArrowForwardRoundedIcon />}>
                {t('read')}
              </Button>
            </a>
          </Link>
        ) : (
          <Button
            variant="contained"
            disableElevation
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={() => {
              enqueueSnackbar('Chapter not released yet!', { variant: 'info' })
            }}>
            {t('read')}
          </Button>
        )}

        {Data?.price ? (
          <>
            {Data?.isPurchased ? (
              <Tooltip title={t('you_have_purchased')}>
                <StyledPurchasedButton disableRipple variant="text" endIcon={<CheckRoundedIcon />} color="success">
                  {t('purchased')}
                </StyledPurchasedButton>
              </Tooltip>
            ) : (
              <StyledButton
                disableElevation
                variant="contained"
                endIcon={<ShoppingCartCheckoutRoundedIcon />}
                onClick={() => setPurchaseModalOpen(true)}>
                {t('purchase_for', { price: Data?.price })}
              </StyledButton>
            )}
          </>
        ) : null}
        {isLoggedIn && <ToggleToLibraryButton contentType={contentType} contentId={contentId} libraryAdded={Data?.libraryAdded} />}
        <LikeButton contentType={contentType} contentId={contentId} likeCount={Data?.likeCount} isLiked={Data?.isLiked} />
        <ShareButton coverImage={Data.coverImage} />
        <MoreOptions contentType={contentType} contentId={contentId} />
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

const ContentName = styled(Typography)`
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
