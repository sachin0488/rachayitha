import React from 'react'
import { Button, Tooltip } from '@mui/material'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import { useToggleToLibraryService } from 'Container/PoemDetail/services/ToggleToLibrary.service'
import { PoemDetailsQuery } from 'Container/PoemDetail/constants/query.address'

const ToggleToLibraryButton = ({ poemId, libraryAdded }) => {
  const { mutate, isLoading } = useToggleToLibraryService({
    poemId,
    queryKey: [PoemDetailsQuery.POEM_DETAILS, { poemId: parseInt(poemId) }],
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
