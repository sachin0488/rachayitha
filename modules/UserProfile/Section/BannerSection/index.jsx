import styled from '@emotion/styled'
import { useCallback, useEffect, useRef, useMemo } from 'react'
import { Button, CircularProgress, Skeleton, Tooltip } from '@mui/material'
import { useController, useForm } from 'react-hook-form'

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded'

import { useUpdateProfileService } from 'modules/UserProfile/services/UpdateProfile.service'
import { useTranslation } from 'next-i18next'

const BannerSection = ({ user, isBannerLoading, readOnly }) => {
  const { t } = useTranslation("common")
  const name = 'profileBanner'

  const { mutate, isLoading } = useUpdateProfileService()

  const { reset, control, handleSubmit } = useForm({
    defaultValues: {
      profileBanner: user?.profileBanner ? [user?.profileBanner] : [],
    },
  })

  const { onChange, value } = useController({
    name,
    control,
    defaultValue: user?.profileBanner ? [user?.profileBanner] : [],
  }).field

  const fileInput = useRef(null)

  useEffect(() => {
    reset({
      profileBanner: user?.profileBanner ? [user?.profileBanner] : [],
    })
  }, [reset, user?.profileBanner])

  const previewImage = useMemo(() => {
    if (value.length) {
      if (typeof value?.[0] === 'string') {
        return value?.[0]
      }
      return URL.createObjectURL(value?.[0])
    }
    return ''
  }, [value])

  const isPreviewAvailable = Boolean(value.length)

  const handleBrowseButton = useCallback(() => {
    fileInput.current?.click()
  }, [])

  const handleFileInput = useCallback(
    e => {
      const files = e.target.files
      if (files.length) {
        const newFilePreviewList = []

        for (let index = 0; index < files.length; index += 1) {
          const file = files[index]
          newFilePreviewList.push(file)
        }

        onChange(newFilePreviewList)
      }
    },
    [onChange],
  )

  if (isBannerLoading) {
    return (
      <Root>
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          animation="pulse"
          sx={{
            background: theme => theme.palette.primary.main + '29',
          }}
        />
        <LandscapeRoundedIcon
          color="secondary"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.5,
            fontSize: 100,
          }}
        />
      </Root>
    )
  }

  return (
    <Root>
      {readOnly !== true ? (
        <>
          {isPreviewAvailable && typeof value?.[0] !== 'string' && (
            <StyledSaveButton disabled={isLoading} onClick={handleSubmit(mutate)} color="secondary" variant="contained">
              {isLoading ? <CircularProgress size={18} thickness={6} sx={{ color: theme => theme.palette.primary.main }} /> : 'Save'}
            </StyledSaveButton>
          )}
          <Tooltip title={t("updateBannerImage")}>
            <StyledEditButton onClick={handleBrowseButton} color="primary" variant="contained" disabled={isLoading}>
              <ModeEditOutlinedIcon style={{ fontSize: 20 }} />
            </StyledEditButton>
          </Tooltip>
        </>
      ) : null}

      {isPreviewAvailable && <StyledImage src={previewImage} alt="Profile Art" />}
      {!isPreviewAvailable && (
        <LandscapeRoundedIcon
          color="secondary"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.5,
            fontSize: 100,
          }}
        />
      )}

      <input
        name={name}
        type="file"
        value={value?.[0]?.filename || ''}
        ref={fileInput}
        onChange={handleFileInput}
        style={{ display: 'none' }}
        accept="image/*"
      />
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  height: 271px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  overflow: hidden;
  background: ${props => props.theme.palette.primary.main}19;
  margin-top: calc(var(--main-side-spacing));
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  object-fit: cover;

  @media (max-width: 500px) {
    height: 220px;
  }

  @media (max-width: 400px) {
    height: 170px;
    /* width: calc(100%); */
    border-radius: 15px;
    /* margin-top: 0px; */
  }
`

const StyledEditButton = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const StyledSaveButton = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0px;
  right: 30px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 80px;
  min-height: 40px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const StyledImage = styled.img`
  /* height: 100%; */
  /* height: 271px; */
  width: 100%;
  object-fit: cover;

  @media (max-width: 500px) {
    height: 220px;
  }

  @media (max-width: 400px) {
    height: 170px;
    /* width: calc(100%); */
    border-radius: 15px;
    /* margin-top: 0px; */
  }
`

export default BannerSection
