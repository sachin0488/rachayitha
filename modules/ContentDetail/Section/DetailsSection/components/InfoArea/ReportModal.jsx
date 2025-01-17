import styled from '@emotion/styled'
import { Button, Skeleton, Typography, CircularProgress } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { StyledModal } from 'components/StyledModal'
import { FormProvider, useForm } from 'react-hook-form'
import { StyledFieldGroup, StyledFormLabel, StyledRadioBox, StyledRadioGroup } from './StyledRadio'
import useFormError from 'hooks/useFormError'
import { useReportContentService, useReportCategoryService } from 'modules/ContentDetail/services/ReportContent.service'
import { useTranslation } from 'react-i18next'

const ReportModal = ({ open, setOpen, contentId, contentType }) => {
  const { t } = useTranslation()
  const { Data, isLoading } = useReportCategoryService({ enabled: open, contentType })
  const { mutate, isLoading: isMutating, isSuccess } = useReportContentService({ contentId: contentId, contentType })

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const { handleFormError } = useFormError()

  const methods = useForm({
    defaultValues: {},
  })

  useEffect(() => {
    if (isSuccess) {
      handleClose()
    }
  }, [isSuccess, handleClose])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={550}>
      <Main onSubmit={methods.handleSubmit(mutate, handleFormError)}>
        <Title variant="h4" component="div" color="secondary">
          {t('report_modal_title')}
        </Title>
        <FormProvider {...methods}>
          {isLoading ? (
            <LoadingRoot>
              <StyledSkeletonCover />
              <StyledSkeletonCover />
              <StyledSkeletonCover />
              <StyledSkeletonCover />
            </LoadingRoot>
          ) : (
            <StyledFieldGroup as="div">
              <StyledFormLabel>{t('report_modal_select_category')}</StyledFormLabel>
              <StyledRadioGroup name="categoryId" row>
                {Data?.map(({ name, shortDetails, id }) => (
                  <StyledRadioBox key={id} label={`${name}`} value={id} />
                ))}
              </StyledRadioGroup>
            </StyledFieldGroup>
          )}
          <Button
            disabled={isLoading || isMutating}
            type="submit"
            variant="contained"
            disableElevation
            sx={{ mt: -2 }}
            endIcon={isMutating ? <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} /> : null}>
            {t('submit')}
          </Button>
        </FormProvider>
      </Main>
    </Root>
  )
}

const LoadingRoot = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  flex-direction: column;
  margin-bottom: 15px;
`

const StyledSkeletonCover = styled(Skeleton)`
  height: 30px;
  width: 100%;
  border-radius: 8px;
  align-self: center;
`

const Root = styled(StyledModal)`
  padding: 18px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Main = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled(Typography)`
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
  @media (max-width: 410px) {
    font-size: 1.65rem;
  }
`

export default ReportModal
