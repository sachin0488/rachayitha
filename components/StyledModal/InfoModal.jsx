import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { useCallback } from 'react'
import { Button, CircularProgress, Typography, useTheme } from '@mui/material'

import StyledModal from './StyledModal'

export const InfoModalType = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  Default: 'default',
}

const InfoModal = ({ setOpen, open, messageNotice, onClickOk, isLoading, buttonText, type, cancelButtonText, disableOkButton }) => {
  const handleClose = useCallback(() => setOpen(false), [setOpen])
  const theme = useTheme()

  type = type ? type : InfoModalType.Default

  return (
    <Root
      maxWidth="350px"
      maxHeight="fit-content"
      open={open}
      onClose={handleClose}
      bodyBarColor={
        type === InfoModalType.Default
          ? theme.palette.primary.main
          : type === InfoModalType.SUCCESS
          ? theme.palette.success.main
          : type === InfoModalType.ERROR
          ? theme.palette.error.main
          : type === InfoModalType.WARNING
          ? theme.palette.warning.main
          : type === InfoModalType.INFO
          ? theme.palette.info.main
          : theme.palette.primary.main
      }>
      <Main>
        <Notice color="secondary" variant="subtitle2">
          {messageNotice}
        </Notice>
        <Nav>
          <StyledButton
            disabled={isLoading}
            variant="outlined"
            onClick={handleClose}
            color={
              type === InfoModalType.Default
                ? 'primary'
                : type === InfoModalType.SUCCESS
                ? 'success'
                : type === InfoModalType.ERROR
                ? 'error'
                : type === InfoModalType.WARNING
                ? 'warning'
                : type === InfoModalType.INFO
                ? 'info'
                : 'primary'
            }>
            {cancelButtonText ? cancelButtonText : 'Cancel'}
          </StyledButton>

          {!disableOkButton && (
            <StyledButton
              disabled={isLoading}
              startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
              variant="contained"
              onClick={onClickOk}
              color={
                type === InfoModalType.Default
                  ? 'primary'
                  : type === InfoModalType.SUCCESS
                  ? 'success'
                  : type === InfoModalType.ERROR
                  ? 'error'
                  : type === InfoModalType.WARNING
                  ? 'warning'
                  : type === InfoModalType.INFO
                  ? 'info'
                  : 'primary'
              }>
              {buttonText ? buttonText : 'Ok'}
            </StyledButton>
          )}
        </Nav>
      </Main>
    </Root>
  )
}

InfoModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  messageNotice: PropTypes.string.isRequired,
  onClickOk: PropTypes.func,
  isLoading: PropTypes.bool,
  buttonText: PropTypes.string,
  type: PropTypes.string,
  cancelButtonText: PropTypes.string,
  disableOkButton: PropTypes.bool,
}

export default InfoModal

const Root = styled(StyledModal)`
  padding: 0px;
  @media (max-width: 450px) {
    padding-top: 15px;
  }
`

const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  outline: none;
  outline: 0;
`

const Notice = styled(Typography)`
  padding: 1em;
  padding-top: 1.3em;
  padding-bottom: 0.2em;
  font-size: 0.95rem;
  line-height: 1.45;
  text-align: center;
  font-weight: 600;

  @media (max-width: 450px) {
    padding: 0.1em;
    padding-top: 0.1em;
    padding-bottom: 0.1em;
  }
`

const Nav = styled.div`
  display: flex;
  gap: 0.7em;

  padding: 1em;

  @media (max-width: 450px) {
    padding: 0.1em;
    padding-top: 1.1em;
  }
`

const StyledButton = styled(Button)`
  border-radius: 11px;
  box-shadow: none;
  gap: 0.3rem;
  flex: 1;
`
