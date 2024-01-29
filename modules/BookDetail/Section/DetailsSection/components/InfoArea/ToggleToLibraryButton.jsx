import React from 'react'
import { Button, Tooltip } from '@mui/material'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import { useToggleToLibraryService } from 'modules/BookDetail/services/ToggleToLibrary.service'
import { BookDetailsQuery } from 'modules/BookDetail/constants/query.address'

const ToggleToLibraryButton = ({ bookId, libraryAdded }) => {
  const { mutate, isLoading } = useToggleToLibraryService({
    bookId,
    queryKey: [BookDetailsQuery.BOOK_DETAILS, { bookId: parseInt(bookId) }],
  })

  return (
    <Tooltip title={libraryAdded ? 'Remove from Library' : 'Add to Library'}>
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
