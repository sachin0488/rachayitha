import React, { useCallback, useEffect } from 'react'
import styled from '@emotion/styled'

import { FormProvider, useForm } from 'react-hook-form'
import { Button, CircularProgress, Typography } from '@mui/material'
import { StyledModal } from 'components/StyledModal'

import StyledTextField from 'components/form-components/StyledTextField'
import StyledRatingField from './components/StyledRatingField'

import { useCreateReviewService } from 'modules/BookDetail/services/CreateReview.service'
import { useUserService } from 'modules/Auth/service/User.service'

const CreateReviewModal = ({ open, setOpen, bookId }) => {
  const { mutate, isLoading, isSuccess } = useCreateReviewService({ bookId, sortBy: '-date' })
  const { user } = useUserService()

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const methods = useForm({
    defaultValues: {
      parameter1: 0,
      parameter2: 0,
      parameter3: 0,
      parameter4: 0,
      parameter5: 0,
      comment: '',
    },
  })

  useEffect(() => {
    if (open) {
      methods.reset({
        parameter1: 0,
        parameter2: 0,
        parameter3: 0,
        parameter4: 0,
        parameter5: 0,
        comment: '',
      })
    }
  }, [open])

  useEffect(() => {
    if (isSuccess) {
      handleClose()
    }
  }, [isSuccess, handleClose])

  const dirtyFields = methods.formState.dirtyFields

  const parameter1 = !!dirtyFields?.parameter1
  const parameter2 = !!dirtyFields?.parameter2
  const parameter3 = !!dirtyFields?.parameter3
  const parameter4 = !!dirtyFields?.parameter4
  const parameter5 = !!dirtyFields?.parameter5
  const comment = !!dirtyFields?.comment

  const isAllDirty = [parameter1, parameter2, parameter3, parameter4, parameter5, comment].includes(false)

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={400}>
      <Main onSubmit={methods.handleSubmit(mutate)}>
        <Title variant="h4" component="div" color="secondary">
          Share your experience
        </Title>
        <FormProvider {...methods}>
          <Body>
            <StyledRatingField label="Writing Quality" name="parameter1" required />
            <StyledRatingField label="Stability of Updates" name="parameter2" required />
            <StyledRatingField label="Story Development" name="parameter3" required />
            <StyledRatingField label="Character Design" name="parameter4" required />
            <StyledRatingField label="World Background" name="parameter5" required />
          </Body>
          <StyledTextField
            name="comment"
            label="Your thoughts here..."
            placeholder="Tell us what you think about this book..."
            multiline
            required
          />
        </FormProvider>

        <Bottom>
          <StyledButton variant="outlined" onClick={() => setOpen(false)}>
            Cancel
          </StyledButton>
          <StyledButton
            disabled={isLoading || isAllDirty}
            startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
            variant="contained"
            type="submit">
            Save
          </StyledButton>
        </Bottom>
      </Main>
    </Root>
  )
}

const Root = styled(StyledModal)`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Main = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-right: auto;
`

const Title = styled(Typography)`
  font-weight: 600;
`
const Bottom = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`
const StyledButton = styled(Button)`
  font-weight: 600;
`

const FieldGroup = styled.form`
  gap: 0.2em;
  display: flex;
  flex-direction: column;
`

export default CreateReviewModal
