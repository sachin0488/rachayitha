import { Button } from '@mui/material'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import { useRouter } from 'next/router'

const ShareButton = () => {
  const { asPath } = useRouter()

  const handleClick = () => {
    let invitationLink = `${window.location.origin}${asPath}`
    navigator.share({
      title: document.title,
      text: 'Check out this amazing content!',
      url: invitationLink,
    })
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
