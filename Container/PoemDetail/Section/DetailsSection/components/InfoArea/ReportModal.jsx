import styled from '@emotion/styled'
import { Button, Skeleton, Typography, CircularProgress } from '@mui/material'
import { useCallback, useEffect } from 'react'

import { StyledModal } from 'Components/StyledModal'
import { FormProvider, useForm } from 'react-hook-form'
import { StyledFieldGroup, StyledFormLabel, StyledRadioBox, StyledRadioGroup } from './StyledRadio'
import useFormError from 'hooks/useFormError'
import { useReportPoemService, useReportCategoryService } from 'Container/PoemDetail/services/ReportPoem.service'

const ReportModal = ({ open, setOpen, poemId }) => {
  const { Data, isLoading } = useReportCategoryService({ enabled: open })
  const { mutate, isLoading: isMutating, isSuccess } = useReportPoemService({ poemId: poemId })

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
          Help us improve our service
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
              <StyledFormLabel>Select the Category which is violated by this author</StyledFormLabel>
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
            Submit
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
