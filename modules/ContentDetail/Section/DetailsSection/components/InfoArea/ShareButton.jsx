import { Button } from '@mui/material'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'

const ShareButton = ({coverImage}) => {
  const handleClick = async () => {
    try {
      const fileUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw21FVLBsNiwEsEnZZXbQN8p&ust=1722547249464000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCttNma0ocDFQAAAAAdAAAAABAH'

      // Fetch the file content from the URL
      const response = await fetch({fileUrl})
      const blob = await response.blob()

      // Create a File object from the blob
      const file = new File([blob], 'shared-file.png', { type: blob.type })

      // Check if the Web Share API supports file sharing
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Check out this file!',
          text: 'I’m sharing this file with you.',
          files: [file],
        })
      } else {
        console.warn('Web Share API with files is not supported on this browser')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <Button
      variant="text"
      onClick={handleClick}
      sx={{ minWidth: 36, width: 36 }}
      disableElevation
    >
      <ShareRoundedIcon />
    </Button>
  )
}

export default ShareButton
