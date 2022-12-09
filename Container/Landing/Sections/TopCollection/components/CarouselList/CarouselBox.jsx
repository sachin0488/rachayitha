import styled from '@emotion/styled'
import displayDot from '@assets/svg/display-dot.svg'

import { useCallback, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import { useFormContext } from 'react-hook-form'

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const CarouselBox = ({ messages, isError, pageState, activeLayoutIndex, msgIndex }) => {
  const [[page, direction], setPage] = pageState
  const paginate = useCallback(
    newDirection => {
      setPage([page + newDirection, newDirection])
    },
    [page, setPage],
  )

  const handleJumpToSelectedPage = index => {
    if (index < msgIndex) {
      setPage([index, -1])
    } else if (index > msgIndex) {
      setPage([index, 1])
    }
  }

  useEffect(() => {
    handleJumpToSelectedPage(activeLayoutIndex)
  }, [activeLayoutIndex])

  return (
    <Root error={isError ? 'true' : 'false'}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="display"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}>
          <strong>{messages[msgIndex]}</strong>
        </motion.div>
      </AnimatePresence>
      <ShowBarContainer>
        {messages.map((item, index) => (
          <ShowBar
            key={index}
            animate={{
              width: msgIndex === index ? 50 : 30,
            }}
            transition={{
              width: { type: 'spring', stiffness: 900, damping: 25 },
              duration: 0.25,
            }}
            onClick={e => {
              if (index < msgIndex) {
                setPage([index, -1])
              } else if (index > msgIndex) {
                setPage([index, 1])
              }
            }}
            error={isError ? 'true' : 'false'}
          />
        ))}
      </ShowBarContainer>
      <IconButton
        className="next"
        onClick={() => {
          paginate(1)
        }}>
        <KeyboardArrowRightRoundedIcon animate="center" />
      </IconButton>
      <IconButton
        className="prev"
        onClick={() => {
          paginate(-1)
        }}>
        <KeyboardArrowLeftRoundedIcon />
      </IconButton>
    </Root>
  )
}

export default CarouselBox

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* height: 200px; */
  .toggle__viewBtn {
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 100;
    height: 32px;
    width: 32px;
  }
  .next,
  .prev {
    top: calc(50% - 22px);
    width: 38px;
    height: 38px;
    position: absolute;
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    z-index: 2;
  }

  .next {
    right: 5px;
  }

  .prev {
    left: 5px;
  }

  .display {
    position: absolute;
    background: ${({ error }) => (error === 'true' ? `rgb(229 57 53 / 21%)` : `rgb(7 98 85 / 31%)`)};
    backdrop-filter: blur(4px);
    width: 100%;
    height: 100%;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    text-align: center;
    /* padding: 25px; */
    padding: 5px;
    border-radius: 8px;
    background-image: url(${displayDot});
    background-repeat: space;
    background-size: 5px;
    strong {
      font-family: system-ui;
      font-size: 1.4742rem;
      font-weight: 800;
      letter-spacing: 0.4px;
      line-height: 0.8;
      color: #b2dfdb;
      opacity: 1;
      background: #13828a;
      background: ${({ error }) =>
        error === 'true'
          ? `radial-gradient( 
            circle farthest-corner at top right, 
            #dcb6b6 51%,
            #f6d6d6 50%, 
            #e3c6c6 100% 
           )`
          : `radial-gradient(
            circle farthest-corner at top right,
            #add5d0 51%,
            #93e1d8 50%,
            #a8e2dd 100%
           )`};
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  small {
    position: absolute;
    top: 5px;
    left: 9px;
    text-align: left;
    font-size: 0.85rem;
    font-weight: 700;
    color: #dcb6b6;
  }
`

export const ShowBarContainer = styled.div`
  height: 5px;
  z-index: 10;
  position: absolute;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  bottom: 10px;
  right: 50%;
  left: 50%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: 1fr;
  gap: 4px 7px;
  justify-content: center;
  justify-items: center;
`

export const ShowBar = styled(motion.div)`
  background: ${({ error }) => (error === 'true' ? `#f6d6d6` : `#93e1d8`)};
  height: 5px;
  z-index: 10;
  border-radius: 5px;
`
