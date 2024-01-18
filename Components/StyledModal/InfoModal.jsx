import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { useCallback } from 'react'
import { Button, CircularProgress, Typography } from '@mui/material'

import StyledModal from './StyledModal'

const InfoModal = ({ setOpen, open, messageNotice, onClickOk, isLoading, buttonText }) => {
  const handleClose = useCallback(() => setOpen(false), [setOpen])

  return (
    <Root maxWidth="350px" maxHeight="fit-content" open={open} onClose={handleClose}>
      <Main>
        <Notice color="secondary" variant="subtitle2">
          {messageNotice}
        </Notice>
        <Nav>
          <StyledButton disabled={isLoading} variant="outlined" onClick={handleClose}>
            Cancel
          </StyledButton>

          <StyledButton
            disabled={isLoading}
            startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
            variant="contained"
            onClick={onClickOk}>
            {buttonText ? buttonText : 'Ok'}
          </StyledButton>
        </Nav>
      </Main>
    </Root>
  )
}

InfoModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  messageNotice: PropTypes.string.isRequired,
  onClickOk: PropTypes.func.isRequired,
}

export default InfoModal

const Root = styled(StyledModal)`
  padding: 0px;
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
`

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0.7em;
  grid-template-areas: '. .';
  padding: 1em;
`

const StyledButton = styled(Button)`
  border-radius: 11px;
  box-shadow: none;
  gap: 0.3rem;
`
