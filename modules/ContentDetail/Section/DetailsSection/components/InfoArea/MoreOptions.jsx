import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Button, Menu } from '@mui/material'
import FlagRoundedIcon from '@mui/icons-material/FlagRounded'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import ReportModal from './ReportModal'
import { useTranslation } from 'react-i18next'

const MoreOptions = ({ contentId, contentType }) => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null)
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
        <MoreVertRoundedIcon />
      </Button>

      <ReportModal contentType={contentType} contentId={contentId} open={isReportModalOpen} setOpen={setIsReportModalOpen} />
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <StyledButton
          color="secondary"
          startIcon={<FlagRoundedIcon />}
          onClick={() => {
            handleClose()
            setIsReportModalOpen(true)
          }}>
          {t('report')}
        </StyledButton>
      </StyledMenu>
    </>
  )
}

const StyledMenu = styled(Menu)`
  // custom styles for mui menu
  .MuiMenu-paper {
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.palette.background.paper};
  }

  .MuiList-padding {
    padding: 0;
  }

  .MuiMenuItem-root {
    padding: 0;
  }

  .MuiButtonBase-root {
    width: 100%;
    border-radius: 0;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.secondary.main};
    text-transform: capitalize;
    &:hover {
      background: ${({ theme }) => theme.palette.primary.main}11;
    }
  }

  .MuiButton-startIcon {
    margin-right: 8px;
  }

  .MuiSvgIcon-root {
    font-size: 1.2rem;
  }
`

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    font-size: 15px;
  }
  .MuiSvgIcon-root {
    font-size: 21px;
  }
`

export default MoreOptions
