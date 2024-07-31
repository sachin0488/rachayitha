import { Button } from '@mui/material'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import { useRouter } from 'next/router'

const ShareButton = ({ coverImage }) => {
  const { asPath } = useRouter()

  const handleClick = async () => {
    try {
      let invitationLink = `${window.location.origin}${asPath}`

      // const response = await fetch({
      //   method: 'GET',
      //   url: coverImage,
      // })

      // const blob = await response.blob()
      // const file = new File([blob], 'image.jpg', { type: 'image/jpeg' })

      navigator.share({
        title: document.title,
        text: 'Check out this amazing content!',
        url: invitationLink,
        // files: [file],
      })
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <>
      <Button
        variant="text"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ minWidth: 36, width: 36 }}
        disableElevation>
        <ShareRoundedIcon />
      </Button>
    </>
  )
}

export default ShareButton
