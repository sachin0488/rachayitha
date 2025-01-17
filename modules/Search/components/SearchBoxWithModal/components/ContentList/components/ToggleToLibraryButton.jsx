import React from 'react'
import styled from '@emotion/styled'
import { Button, Tooltip } from '@mui/material'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import { useToggleToLibraryService } from 'modules/BookDetail/services/ToggleToLibrary.service'
import { useTranslation } from 'react-i18next'
const ToggleToLibraryButton = ({ bookId, libraryAdded, SearchKeyword }) => {
  const { mutate, isLoading } = useToggleToLibraryService({
    bookId: bookId,
    queryKey: ['search-list', SearchKeyword],
  })

  const { t } = useTranslation();

  return (
    <Tooltip title={libraryAdded ? t('toggleToLibraryButton.removeFromLibrary') : t('toggleToLibraryButton.addToLibrary')}>
      <ToggleToLibraryStyledButton
        disabled={isLoading}
        variant="contained"
        sx={{ minWidth: 40, width: 40 }}
        onClick={() => mutate({ addToLibrary: !libraryAdded })}>
        {Boolean(libraryAdded) ? <LibraryAddCheckIcon fontSize="small" /> : <LibraryAddRoundedIcon fontSize="small" />}
      </ToggleToLibraryStyledButton>
    </Tooltip>
  )
}

const ToggleToLibraryStyledButton = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 35px;
  min-height: 35px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ToggleToLibraryButton
