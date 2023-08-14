import styled from '@emotion/styled'
import { forwardRef } from 'react'
import { Dialog, IconButton, Slide, useMediaQuery } from '@mui/material'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const Transition = forwardRef(function Transition({ isBreakPointCrossed, ...props }, ref) {
  return <Slide direction={isBreakPointCrossed ? 'left' : 'down'} ref={ref} {...props} />
})

const StyledModal = ({ children, open, handleClose, ...props }) => {
  const { title, breakPoint, maxWidth, maxHeight, ...bodyProps } = props
  const isBreakPointCrossed = useMediaQuery(`(max-width: ${breakPoint}px)`)
  return (
    <Root
      open={open}
      TransitionComponent={Transition}
      TransitionProps={{ isBreakPointCrossed }}
      keepMounted
      onClose={handleClose}
      aria-describedby={title}
      max_width={maxWidth}
      max_height={maxHeight}
      custom_barack_point={breakPoint}>
      <Body {...bodyProps}>
        <StyledIconButton color="primary" onClick={handleClose}>
          <CloseRoundedIcon />
        </StyledIconButton>
        {children}
      </Body>
    </Root>
  )
}

export default StyledModal

const Root = styled(Dialog)`
  backdrop-filter: blur(7px);

  .MuiDialog-paper {
    width: 90vw;
    max-width: ${({ max_width }) => (max_width ? max_width : `60rem`)};
    max-height: ${({ max_height }) => (max_height ? (max_height === 'fit-content' ? `86vh` : max_height) : `81rem`)};
    height: ${({ max_height }) => (max_height === 'fit-content' ? max_height : `86vh`)};
    overflow: hidden;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.background.default};
    /* background-image: none; */
  }

  @media (max-width: ${({ custom_barack_point }) => custom_barack_point}px) {
    backdrop-filter: blur(0px);

    .MuiDialog-paper {
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      max-height: 100vh;
      border-radius: 0px;
      margin: 0px;
    }
  }
`

const Body = styled.div`
  max-width: 65rem;
  padding: 0px 27px 15px;
  overflow-y: auto;
  padding-top: 0px;
  border-top: 8px solid ${props => props.theme.palette.primary.main};
`

const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 5px;
  top: 10px;
  display: none;
  @media (max-width: 400px) {
    display: flex;
  }
`
