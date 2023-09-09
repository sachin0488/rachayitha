import { useCallback, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import styled from '@emotion/styled'
import { ListItemButton } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'

const PhotoUploader = ({ name }) => {
  const { control } = useFormContext()

  const { onChange, value } = useController({
    name,
    control,
    defaultValue: [],
  }).field

  const fileInput = useRef(null)

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

  return (
    <Root onClick={handleBrowseButton}>
      {isPreviewAvailable && <ImagePreview src={previewImage} alt="" />}
      {!isPreviewAvailable && <PhotoCameraIcon color="secondary" />}
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

PhotoUploader.propTypes = {
  name: PropTypes.string.isRequired,
}

export default PhotoUploader

const Root = styled(ListItemButton)`
  background: ${({ theme }) => theme.palette.primary.main}12;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  aspect-ratio: 1/1;
  width: 160px;
  height: 160px;
`

const ImagePreview = styled.img`
  width: auto;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`
