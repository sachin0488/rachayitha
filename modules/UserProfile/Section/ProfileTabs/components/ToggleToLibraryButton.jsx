import React from 'react'
import styled from '@emotion/styled'
import { Button, Tooltip } from '@mui/material'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import { useToggleToLibraryService } from 'modules/UserProfile/services/ToggleToLibrary.service'
import { StyledCornerButton } from './CardCommonStyles'

const ToggleToLibraryButton = ({ contentId, libraryAdded, contentType }) => {
  const { mutate, isLoading } = useToggleToLibraryService({
    contentId,
    contentType,
  })

  return (
    <Tooltip title={libraryAdded ? 'Remove from Library' : 'Add to Library'}>
      <StyledCornerButton
        disabled={isLoading}
        variant="contained"
        sx={{ minWidth: 40, width: 40 }}
        onClick={() => mutate({ addToLibrary: !libraryAdded })}>
        {Boolean(libraryAdded) ? <LibraryAddCheckIcon fontSize="small" /> : <LibraryAddRoundedIcon fontSize="small" />}
      </StyledCornerButton>
    </Tooltip>
  )
}

export default ToggleToLibraryButton
