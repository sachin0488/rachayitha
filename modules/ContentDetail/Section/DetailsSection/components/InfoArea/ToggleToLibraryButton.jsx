import React from 'react'
import { Button, Tooltip } from '@mui/material'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import { useToggleToLibraryService } from 'modules/ContentDetail/services/ToggleToLibrary.service'
import { ContentDetailsQuery } from 'modules/ContentDetail/constants/query.address'
import { useTranslation } from 'next-i18next'
const ToggleToLibraryButton = ({ contentId, libraryAdded, contentType }) => {
  const { mutate, isLoading } = useToggleToLibraryService({
    contentId,
    queryKey: [ContentDetailsQuery.CONTENT_DETAILS, { contentId: parseInt(contentId), contentType }],
    contentType,
  })
 const {t}=useTranslation();
  return (
    <Tooltip title={libraryAdded ? t('toggleToLibraryButton.removeFromLibrary') : t('toggleToLibraryButton.addToLibrary')}>
      <Button
        disabled={isLoading}
        variant="contained"
        sx={{ minWidth: 40, width: 40 }}
        onClick={() => mutate({ addToLibrary: !libraryAdded })}>
        {Boolean(libraryAdded) ? <LibraryAddCheckIcon fontSize="small" /> : <LibraryAddRoundedIcon fontSize="small" />}
      </Button>
    </Tooltip>
  )
}

export default ToggleToLibraryButton
